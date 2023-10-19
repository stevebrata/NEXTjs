"use client"

export default function Pagination({ page, setPage, movies }) {
  console.log(movies)
  return (
    <div className="flex justify-center gap-2 text-xl font-bold">
      <button onClick={page == 1 ? null : () => setPage((prev) => prev - 1)}>prev</button>
      <span>{page}</span>
      <button onClick={(!movies.Error) ? (() => setPage((prev) => prev + 1)) : null}>next</button>
    </div>
  )
}