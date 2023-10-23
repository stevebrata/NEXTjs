"use client"

import { useSession } from "next-auth/react"
import MovieList from "./components/MovieList"
import { useRouter } from "next/navigation"

export default function Page() {
  const { status } = useSession()
  const router = useRouter()

  return (
    < MovieList />
  )
}
