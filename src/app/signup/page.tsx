'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { auth } from '@/app/firebase/config';

import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import AuthForm from '../components/authform';
import Error from '../components/error';
import Link from 'next/link';
import Loading from '../components/loading';

const signup: React.FC = () => {
  const router = useRouter();

  const [userAuth, authLoading] = useAuthState(auth);
  const [resolved, setResolved] = useState<boolean>(false);

  useEffect(() => {
    console.log(authLoading);
    if (authLoading) return;
    console.log(userAuth);

    if (userAuth) {
      return router.push('/dashboard');
    } else {
      setResolved(true);
    }
  }, [userAuth, authLoading]);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const login = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        router.push('/dashboard');
      } catch {
        console.log('something went really wrong');
      }
    };

    if (!error && user) {
      login();

      return;
    }
  }, [error, user]);

  const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  // The error popup should be disabled if the message doesn't match
  const checkErrorDisabled = (errorValue: string) => {
    return error?.message !== errorValue;
  };

  return !resolved ? (
    <Loading />
  ) : (
    <>
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <Error
          disabledSupplier={() => checkErrorDisabled('Firebase: Error (auth/invalid-email).')}
          message="Please enter a valid email"
        />
        <Error
          disabledSupplier={() =>
            checkErrorDisabled('Firebase: Error (auth/email-already-in-use).')
          }
          message="Email is already in use, please navigate to the"
        >
          <Link href="/Login" className="text-blue-400 underline">
            {' '}
            Login page
          </Link>
        </Error>
        <Error
          disabledSupplier={() =>
            checkErrorDisabled(
              'Firebase: Password should be at least 6 characters (auth/weak-password).',
            )
          }
          message="Choose a stronger password, with more than 6 characters"
        />

        <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign Up</h2>

        <AuthForm
          label="Sign Up"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default signup;
