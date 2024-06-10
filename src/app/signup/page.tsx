"use client"

import { useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"
import { auth } from "@/app/firebase/config"
import Error, { ErrorType } from "../components/error"

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"



const signup: React.FC = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorType, setErrorType] = useState<ErrorType>(ErrorType.NONE)

    useEffect(() => {

        if (!error && user) {
            router.push("/dashboard")
            return;
        }

        if (error) {
            console.log(error.message)

            if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                setErrorType(ErrorType.EMAIL_IN_USE)
            } else if (error.message === "Firebase: Error (auth/invalid-email).") {
                setErrorType(ErrorType.INVALID_EMAIL)
            } else if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                setErrorType(ErrorType.WEAK_PASSWORD)
            }
            else {
                setErrorType(ErrorType.UNKNOWN)
            }

        }

    }, [error, user])



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const res = await createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error)
            return;
        }
    };



    return (
        <>
            <div className="max-w-md w-full bg-white p-8 rounded-lg">
                <Error error={errorType}></Error>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign Up</h2>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    );
}

export default signup