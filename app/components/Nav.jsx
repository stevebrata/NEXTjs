'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { useThemeContext } from "../context/useThemeContext"
import { useTheme } from 'next-themes'


export default function Nav() {
  const router = useRouter()
  const [name, setName] = useState('')
  // const { theme, setTheme } = useThemeContext()
  const { theme, setTheme } = useTheme()
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
        <div className="bg-white flex justify-between rounded-md relative items-center cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}  >
          <div>🌞</div>
          <div className="w-[22px] h-[22px] rounded-full bg-orange-500 absolute transition-all duration-500" style={theme === "dark" ? { right: 1 } : { left: 1 }} ></div>
          <div>🌙</div>
        </div>
      </div>
      <div className=" p-4">
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleSubmit} className=" block rounded-md px-4 py-2 mx-auto" placeholder="search"></input>
      </div>
    </div >
  )
}