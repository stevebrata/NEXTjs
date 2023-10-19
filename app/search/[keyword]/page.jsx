import Card from "../../components/Card"

export default async function Page({ params }) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=dd686db3&s=${params.keyword}&type=series&page=1`)
  const movies = await res.json()
  console.log(movies)
  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      <Card movies={movies.Search} />
    </div>
  )
}
