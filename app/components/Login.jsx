'use client'
import { signIn } from "next-auth/react"

function page() {
  return (
    <div className="container login_wrap">
      <div className="login_box">
        <div className="login_header"> Login
        </div>
        <button className="login_button" onClick={signIn("google")}>sign in</button>
      </div>
    </div>
  )
}
export default page