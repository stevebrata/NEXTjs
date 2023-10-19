"use client"

import { useRouter } from "next/navigation"


export default function Card({ movies }) {
  const router = useRouter()

  function handleDetail(id) {
    router.push(`/detail/${id}`)
  }

  return (
    <>
      {
        movies?.map(movie =>
          <div key={movie.imdbID} className="border border-orange-500 rounded-md mx-auto p-3 my-3 text-center flex flex-col w-[350px] gap-2">
            <p className="card-header">{movie.Title}</p>
            <div className="flex flex-col gap-2 items-center">
              <img src={movie.Poster} alt="img" className="mx-auto w-auto" />
              <hr />
              <span>{movie.Year}</span><br />
              <button className="outline outline-slate-500 px-2 py-1 rounded-md w-fit" onClick={() => handleDetail(movie.imdbID)}>detail</button>
            </div>
          </div>
        )
      }
    </>
  )
}