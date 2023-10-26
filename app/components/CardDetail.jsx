import Link from "next/link";

export default function
  ({ movies }) {
  return (
    <>
      {
        movies?.map(movie =>
          <div key={movie.imdbID} className="border border-orange-500 rounded-md mx-auto p-3 my-3 text-center flex flex-col w-[200px] h-[400px] gap-2">
            <p className="card-header">{movie.Title}</p>
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
              <span>{movie.Released}</span><br />
              <span>{movie.Genre}</span><br />
              <span>{movie.Actor}</span><br />
              <span>{movie.Runtime}</span><br />
              <span>{movie.Award}</span><br />
              <span>{movie.Director}</span><br />
              <Link href={'/'}><button className="outline outline-slate-500 px-2 py-1 rounded-md w-fit">Home</button></Link>
            </div>
          </div>
        )
      }
    </>
  )
}