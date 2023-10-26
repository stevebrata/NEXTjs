'use client'
import Image from "next/image";
import Link from "next/link";

export default function CardDetail({ movies }) {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}?q=${quality}`
  }
  return (
    <>

      <div key={movies.imdbID} className="border border-orange-500 rounded-md mx-auto p-3 my-3 text-center flex flex-col w-[200px] h-[400px] gap-2">
        <p className="card-header">{movies.Title}</p>
        <div className="flex flex-col gap-2 items-center">
          <Image
            loader={imageLoader}
            src={movies.Poster}
            alt="Picture of the author"
            width={100}
            height={100}
            quality={75}
          />
          <hr />
          <span>{movies.Year}</span><br />
          <span>{movies.Released}</span><br />
          <span>{movies.Genre}</span><br />
          <span>{movies.Actor}</span><br />
          <span>{movies.Runtime}</span><br />
          <span>{movies.Award}</span><br />
          <span>{movies.Director}</span><br />
          <Link href={'/'}><button className="outline outline-slate-500 px-2 py-1 rounded-md w-fit">Home</button></Link>
        </div>
      </div>

    </>
  )
}