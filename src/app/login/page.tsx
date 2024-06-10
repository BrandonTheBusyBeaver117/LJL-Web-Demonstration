"use client"

import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"
import { auth } from "@/app/firebase/config"

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import AuthForm from "../components/authform"
import Error from "../components/error"
import Link from "next/link"



const signup: React.FC = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        if (!error && user) {
            router.push("/dashboard")
            return;
        }

    }, [error, user])



    const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
        e.preventDefault()

        try {
            const res = await createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error)
            return;
        }
    };

    // The error popup should be disabled if the message doesn't match
    const checkErrorDisabled = (errorValue: string) => {
        return error?.message !== errorValue
    }

    return (
        <>
            <div className="max-w-md w-full bg-white p-8 rounded-lg">

                <Error
                    disabledSupplier={() => checkErrorDisabled("Firebase: Error (auth/invalid-email).")}
                    message="Please enter a valid email"
                />


                <h2 className="text-2xl font-bold mb-6 text-gray-900">Log In</h2>

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
}

export default signup