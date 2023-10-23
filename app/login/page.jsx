'use client'
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function page() {
  const { data, status } = useSession()
  const router = useRouter()
  if (status === "authenticated")
    router.push('/')

  return (
    <div className="container login_wrap">
      <div className="login_box">
        <div className="login_header"> Login
        </div>
        <button className="login_button" onClick={() => signIn("google")}>sign in</button>
      </div>
    </div>
  )
}
export default page