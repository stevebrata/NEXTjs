import Card from "@/app/components/Card"

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}i=${params.keyword}`)
  const movies = await res.json()
  console.log(movies)
  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      <Card movies={movies} />
    </div>
  )
}