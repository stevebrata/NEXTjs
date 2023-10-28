import CardDetail from "../../components/CardDetail"

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}i=${params.keyword}`)
  const movie = await res.json()
  return (
    <div className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${movie.Poster})` }
    }>

      <CardDetail movie={movie} />
    </div >
  )
}