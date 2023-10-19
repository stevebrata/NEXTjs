'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useThemeContext } from "../context/useThemeContext"


export default function Nav() {
  const router = useRouter()
  const [name, setName] = useState('')
  const { theme, setTheme } = useThemeContext()
  function handleSubmit(e) {
    if (!name) return
    if (e.key == 'Enter') {
      router.push(`/search/${name}`)
      setName('')
    }
  }

  return (
    <div className=" w-full flex p-4 justify-between items-center bg-slate-500">
      <div className="flex gap-2">
        <Link href={'/'} className="text-xl font-bold"> SBMovies
        </Link>
        <div className="bg-white flex justify-between rounded-md relative items-center">
          <div>🌞</div>
          <div className="w-[22px] h-[22px] rounded-full bg-orange-500 absolute transition-all" onClick={() => setTheme(!theme)} style={theme ? { right: 1 } : { left: 1 }} ></div>
          <div>🌙</div>
        </div>
      </div>
      <div className="overflow-hidden p-4">
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleSubmit} className="rounded-md px-4 py-2" placeholder="search"></input>
      </div>
    </div >
  )
}