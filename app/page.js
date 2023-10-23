"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import MovieList from "./components/MovieList"


export default function Page() {
  const { status } = useSession()
  const router = useRouter()

  return (
    <>{status === "authenticated" ?
      router.push("/login")
      : (<>
        router.push("/")
        < MovieList />
      </>
      )
    }
    </>
  )
}
