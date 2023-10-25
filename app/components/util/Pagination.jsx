"use client"

export default function Pagination({ page, setPage, movies }) {
  console.log(movies)
  return (
    <div className="flex justify-center gap-2 text-xl font-bold">
      {page <= 1 ? null :
        <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
      }
      <span>{page}</span>
      {movies.Error ? null :
        <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      }
    </div>
  )
}