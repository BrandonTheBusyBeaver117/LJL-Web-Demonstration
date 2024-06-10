"use client"

import React from "react"


type AuthFormProps = {
    label: string
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    handleSubmit: (event: React.FormEvent, email: string, password: string) => void
}


const AuthForm: React.FC<AuthFormProps> = ({ label, email, setEmail, password, setPassword, handleSubmit }) => {

    return (
        <form onSubmit={event => handleSubmit(event, email, password)}>
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
                {label}
            </button>
        </form>

    );
}

export default AuthForm