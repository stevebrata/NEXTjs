'use client'
import Image from "next/image";
import Link from "next/link";

export default function CardDetail({ movie }) {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}?q=${quality}`
  }
  return (
    <>

      <div key={movie.imdbID} className="box_detail bg-white/30 backdrop-blur-md p-3 text-center">
        <p className="card-header font-bold text-3xl">{movie.Title}</p>
        <div className="flex flex-col gap-2 items-center md:flex-row">
          <div className="flex-grow flex justify-center">
            <Image
              loader={imageLoader}
              src={movie.Poster}
              alt="Picture of the author"
              width={300}
              height={300}
              quality={75}
            />
          </div>
          <div className="detail_movie flex-grow">
            <h3>Year</h3>
            <span>{movie.Year}</span><br />
            <h3>Release date</h3>
            <span>{movie.Released}</span><br />
            <h3>Genre</h3>
            <span>{movie.Genre}</span><br />
            <h3>Actor</h3>
            <span>{movie.Actors}</span><br />
            <h3>Duration</h3>
            <span>{movie.Runtime}</span><br />
            <h3>Award</h3>
            <span>{movie.Awards}</span><br />
            <h3>Director</h3>
            <span>{movie.Director}</span><br />
          </div>
        </div>
        <Link href={'/'} ><button className="outline px-2 py-1 rounded-md w-fit">Home</button></Link>
      </div>

    </>
  )
}