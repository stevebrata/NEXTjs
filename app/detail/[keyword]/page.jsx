import Card from "@/app/components/Card"

export default async function Page({ params }) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=dd686db3&i=${params.keyword}`)
  const movies = await res.json()

  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      <Card movies={movies} />
    </div>
  )
}