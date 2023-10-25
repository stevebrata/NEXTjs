"use client"

export default function Pagination({ page, setPage, movies }) {
  const nextPage = page + 1
  return (
    <div className="flex justify-center gap-2 text-xl font-bold">
      {page <= 1 ? null :
        <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
      }
      <span>{page}</span>
      {nextPage && movies.Error ? null :
        <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      }
    </div>
  )
}