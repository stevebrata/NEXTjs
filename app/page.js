"use client"
import Login from "./components/Login"
import { useSession } from "next-auth/react"
import MovieList from "./components/MovieList"


export default function Page() {
  const { status } = useSession()


  return (
    <>{status === "unauthenticated" ?
      <Login />
      :

      < MovieList />

    }
    </>
  )
}
