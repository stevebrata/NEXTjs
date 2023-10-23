"use client"
import Login from "./components/Login"
import { useSession } from "next-auth/react"
import MovieList from "./components/MovieList"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [status])
  return (
    <>{status === "unauthenticated" ?
      <Login />
      :
      < MovieList />
    }
    </>
  )
}
