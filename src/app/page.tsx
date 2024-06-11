"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "./firebase/config";
import Loading from "./components/loading";

export default function Home() {

  const [user] = useAuthState(auth)

  const router = useRouter()

  const [resolved, setResolved] = useState<boolean>(false)
  const [userAuth, authLoading] = useAuthState(auth)

  useEffect(() => {

    if (authLoading) return;

    if (userAuth) {
      return router.push("/dashboard")
    } else {
      setResolved(true)
    }
  }, [userAuth, authLoading])

  useEffect(() => {
    if (user) {
      return router.push("/dashboard")
    }
  }, [user])

  return (!resolved ? <Loading /> :
    <>

      <div className="max-w-xl min-h-72 w-full bg-white px-8 rounded-lg flex flex-col items-center justify-evenly">
        <h1 className="text-center">NRG is an innovative website helping you track your most important tasks</h1>
        <h1 className="text-center">Get started with the most amazing website in the world today!</h1>
        <h1 className="text-center">Login or sign up below</h1>
      </div>

      <div className="flex w-1/5 h-12 justify-between ">
        <Link className="bg-slate-100 rounded-full basis-1/3 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-sky-200 duration-300"
          href="/login">
          <div >Log in</div>
        </Link>

        <Link className="bg-slate-100 rounded-full basis-1/3 flex justify-center items-center transition ease-in-out hover:-translate-y-1 hover:bg-sky-200 duration-300"
          href="/signup">
          <div >Sign up</div>
        </Link>

      </div>
    </>
  );
}
