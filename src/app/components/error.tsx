export enum ErrorType {
    NONE,
    INVALID_EMAIL,
    WEAK_PASSWORD,
    EMAIL_IN_USE,
    UNKNOWN,
}

export type ErrorProps = {
    error: ErrorType
}

import Link from "next/link";

// Could be refactored to accept a sort of message generator as a prop
// But for such a demo, there's no need for such versatility lol
const Error: React.FC<ErrorProps> = ({ error }) => {

    switch (error) {
        case ErrorType.NONE:
            return <></>
        case ErrorType.INVALID_EMAIL:
            return <div className=" bg-red-500 text-white p-2 rounded mb-4">
                Please enter a valid email
            </div>
        case ErrorType.EMAIL_IN_USE:
            return <div className=" bg-red-500 text-white p-2 rounded mb-4">
                Email is already in use, please navigate to the
                <Link href="/Login" className="text-blue-400 underline"> Login page</Link>
            </div>
        case ErrorType.WEAK_PASSWORD:
            return <div className=" bg-red-500 text-white p-2 rounded mb-4">
                Choose a stronger password, with more than 6 characters
            </div>
        case ErrorType.UNKNOWN:
        default:
            return <div className=" bg-red-500 text-white p-2 rounded mb-4">
                Something went wrong

            </div>

    }
}

export default Error 