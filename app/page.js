
import Link from "next/link"
import Card from "./components/Card"


export default async function Page() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}&s=movie&t=movie&y=2023&page=1`)
  const movies = await res.json()
  console.log(movies)
  return (
    <>
      <div className={`flex justify-between px-4 text-2xl `}>
        <h2>Movie</h2>
        <Link href={'/movie'}>More</Link>
      </div >
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
        <Card movies={movies.Search} />
      </div>
    </>
  )
}
