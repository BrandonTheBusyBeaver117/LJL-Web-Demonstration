'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { auth } from '@/app/firebase/config';

import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import AuthForm from '../components/authform';
import Error from '../components/error';
import Link from 'next/link';
import Loading from '../components/loading';

const Login: React.FC = () => {
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
  }, [userAuth, authLoading, router]);

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!error && user) {
      router.push('/dashboard');
      return;
    }

    console.log(error?.message);
  }, [error, user, router]);

  const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
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
          disabledSupplier={() => checkErrorDisabled('Firebase: Error (auth/invalid-credential).')}
          message="Either your email or password is incorrect. Need to make an account? Go to the "
        >
          <Link href="/signup" className="text-blue-400 underline">
            Sign Up page
          </Link>
        </Error>

        <h2 className="mb-6 text-2xl font-bold text-gray-900">Log In</h2>

        <AuthForm
          label="Log In"
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

export default Login;
