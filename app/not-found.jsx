import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center p-10">
      <span className="text-xl font-bold">
        Sorry page not found
      </span>
      <br />
      <Link href={'/'}>
        <button className="my-2 p-3 rounded-xl border-[3px] border-orange-500">
          Home
        </button>
      </Link>
    </div>
  )
}