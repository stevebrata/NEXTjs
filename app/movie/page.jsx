"use client"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Pagination from "../components/util/Pagination"

export default function Page() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

  const result = async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=dd686db3&s=movie&t=movie&y=2023&page=${page}`)
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
        <h2>Movie</h2>

      </div>
      <div className="grid grid-cols-3 gap-3 place-items-center">
        <Card movies={movies.Search} />
      </div>

      <Pagination page={page} setPage={setPage} movies={movies} />
    </>
  )
}