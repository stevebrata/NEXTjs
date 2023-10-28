"use client"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import Pagination from "../../components/util/Pagination"
import Link from "next/link"

export default function Page({ params }) {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const decodeMovie = decodeURI(params.keyword)


  const result = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}s=${decodeMovie}&type=series&page=${page}`)
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
  const lastPage = Math.ceil(Number(movies.totalResults) / 10)
  return (

    <>
      {!movies.Error ? <>
        <div className="flex justify-between px-4 text-2xl">
          <h2>Result for {decodeMovie}</h2>

        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
          <Card movies={movies.Search} />
        </div>

        <Pagination page={page} setPage={setPage} movies={movies} lastPage={lastPage} />
      </> : <div className="text-center p-10">
        <span className="font-bold text-xl">
          Movies not found
        </span>
        <br />
        <Link href={'/'}>
          <button className="rounded-xl my-2 p-3 border-[3px] border-orange-500">
            Home
          </button>
        </Link>
      </div>}
    </>
  )
}