// import Card from "../../components/Card"

// export default async function Page({ params }) {
//   const res = await fetch(`http://www.omdbapi.com/?apikey=dd686db3&s=${params.keyword}&type=series&page=1`)
//   const movies = await res.json()
//   console.log(movies)
//   return (
//     <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
//       <Card movies={movies.Search} />
//     </div>
//   )
// }
"use client"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import Pagination from "../../components/util/Pagination"

export default function Page({ params }) {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const decodeMovie = decodeURI(params.keyword)


  const result = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=dd686db3&s=${decodeMovie}&type=series&page=${page}`)
    const data = await res.json()
    setMovies(data)
  }

  useEffect(() => {
    result()
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }, [page])

  return (
    <>
      <div className="flex justify-between px-4 text-2xl">
        <h2>Result for {decodeMovie}</h2>

      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
        <Card movies={movies.Search} />
      </div>

      <Pagination page={page} setPage={setPage} movies={movies} />
    </>
  )
}