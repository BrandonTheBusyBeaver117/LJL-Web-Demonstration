"use client"

import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/app/firebase/config"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import Loading from "../components/loading";

type DashboardProps = {
    params: {
        id: string
    }
}

const dashboard: React.FC<DashboardProps> = ({ params }) => {
    const router = useRouter()

    const [resolved, setResolved] = useState<boolean>(false)
    const [userAuth, authLoading] = useAuthState(auth)

    useEffect(() => {

        if (authLoading) return;

        if (!userAuth) {
            return router.push("/")
        } else {
            setResolved(true)
        }
    }, [userAuth, authLoading])


    // Too lazy to get the user's name or anything from the form
    // I'll just read them back their email
    const name = userAuth?.email

    return (!resolved ? <Loading /> :
        <>
            <button
                onClick={() => signOut(auth)}
                className="absolute top-4 right-4 bg-fuchsia-500 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300"
            >
                Sign Out
            </button>

            <div className=" bg-sky-200 flex flex-col items-center justify-evenly grow rounded-3xl border-4 border-sky-600">

                <div id="intro wrapper" className="flex flex-col items-center text-3xl grow-[3] basis-0">
                    <h1 className="m-5">Hello {name}!</h1>
                    <h1>Welcome to your dashboard!</h1>
                </div>


                <div className="flex flex-col items-center text-1xl grow-[5] basis-0">
                    <h2 className="m-5">Chances of allowing Brandon to intern at LJL:</h2>
                    <div id="image wrapper" className="flex flex-col items-center">
                        <Image
                            className="relative"
                            src="/upwardtrend.jpg"
                            alt="chart"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '50%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </>)
}

export default dashboard