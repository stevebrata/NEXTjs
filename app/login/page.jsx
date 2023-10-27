'use client'
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function page() {
  const { status } = useSession()
  const router = useRouter()
  if (status === "loading")
    return <div>Loading..</div>
  if (status === "authenticated")
    router.push('/')

  return (
    <div className="login_wrap">
      <div className="login_box">
        <div className="login_header"> Login
        </div>
        <button className="login_button" onClick={() => signIn("google")}>Google</button>
      </div>
    </div>
  )
}
export default page