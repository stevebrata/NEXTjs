import Link from "next/link"
import Card from "./components/Card"

export default async function Page() {
  const res = await fetch('http://www.omdbapi.com/?apikey=dd686db3&s=movie&t=movie&y=2023&page=1')
  const movies = await res.json()
  return (
    <>
      <div className="flex justify-between px-4 text-2xl">
        <h2>Movie</h2>
        <Link href={'/movie'}>More</Link>
      </div>
      <div className="grid grid-cols-3 gap-3 place-items-center">
        <Card movies={movies.Search} />
      </div>
    </>
  )
}
