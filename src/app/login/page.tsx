"use client"

import { useRouter } from "next/navigation"



const login = () => {

    const router = useRouter()

    const onSuccess = () => {
        router.push("/dashboard")
    }

    return <>
        <div className="w-1/3 h-full m-auto bg-white flex flex-col items-center">

            <div className="grow flex flex-col justify-center">
                <h1>Login</h1>
            </div>
            <div className="grow-[2]  flex flex-col justify-center">Authy stuff

                <h1>fsdjkiojsf</h1>
            </div>

        </div>

    </>
}

export default login