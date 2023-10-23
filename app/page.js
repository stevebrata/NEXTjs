"use client"

import { useSession } from "next-auth/react"
import MovieList from "./components/MovieList"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    status === "authenticated" ? router.push('/') : router.push('/login')
  }, [status])
  return (

    < MovieList />

  )
}
