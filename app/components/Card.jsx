"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Card({ movies }) {
  const router = useRouter()
  const { status } = useSession()

  // because from API should use loader
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}?q=${quality}`
  }

  function handleDetail(id) {
    router.push(`/detail/${id}`)
  }

  return (
    <>
      {
        movies?.map(movie =>
          <div key={movie.imdbID} className="border border-orange-500 rounded-md mx-auto p-3 my-3 text-center flex flex-col w-[200px] h-[400px] gap-2">
            <p className="card-header h-[100px]">{movie.Title}</p>
            <div className="flex flex-col gap-2 items-center">
              <Image
                loader={imageLoader}
                src={movie.Poster}
                alt="Picture of the author"
                width={100}
                height={100}
                quality={75}
              />
              <hr />
              <span>{movie.Year}</span><br />
              {status === "authenticated" ?
                <button className="outline outline-slate-500 px-2 py-1 rounded-md w-fit" onClick={() => handleDetail(movie.imdbID)}>detail</button> : null
              }
            </div>
          </div>
        )
      }
    </>
  )
}