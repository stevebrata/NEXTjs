'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { useThemeContext } from "../context/useThemeContext"
import { useTheme } from 'next-themes'
import { signIn, signOut, useSession } from "next-auth/react"


export default function Nav() {
  const router = useRouter()
  const [name, setName] = useState('')
  // const { theme, setTheme } = useThemeContext()
  const { theme, setTheme } = useTheme()
  const { data, status } = useSession()
  console.log(data, status)
  function handleSubmit(e) {
    if (!name) return
    if (e.key == 'Enter') {
      router.push(`/search/${name}`)
      setName('')
    }
  }

  return (
    // <div className={`${theme ? 'dark' : 'light'} w-full block md:flex p-4 justify-between items-center bg-slate-500`}>
    <div className={`w-full block md:flex p-4 justify-between items-center bg-slate-500 nav`}>
      <div className="flex gap-2 justify-center">
        <Link href={'/'} className="text-xl font-bold" data-hide-on-theme="dark"> SBMovies
        </Link>
        <div className="bg-white border-[2px] border-gray-800 flex justify-between rounded-md relative items-center cursor-pointer box-mode" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}  >
          <div>🌞</div>
          <div className="w-[22px] h-[22px] rounded-full bg-orange-500 absolute transition-all duration-500 border-[2px] border-gray-600 button" style={theme === "dark" ? { right: 1 } : { left: 1 }} ></div>
          <div>🌙</div>
        </div>
      </div>
      <div className=" p-4">
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleSubmit} className=" block rounded-md px-4 py-2 mx-auto" placeholder="search"></input>
      </div>
      <div>
        {status === "unauthenticated" ? (

          <button onClick={() => signIn("google")}>sign in</button>
        ) : <>
          <button onClick={signOut}>sign out</button>
          <p>sign in as {data?.user?.name}</p></>
        }
      </div>
    </div >
  )
}