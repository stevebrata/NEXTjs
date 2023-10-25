import Card from "@/app/components/Card"

export default async function Page({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}i=${params.keyword}`)
  const movies = await res.json()
  console.log(movies)
  return (
    <div className="grid grid-cols-3 gap-3 place-items-center">
      {/* <Card movies={movies} /> */}
//   Title: 'Game of Thrones',
    //   Year: '2011–2019',
    //   Rated: 'TV-MA',
    //   Released: '17 Apr 2011',
    //   Runtime: '57 min',
    //   Genre: 'Action, Adventure, Drama',
    //   Director: 'N/A',
    //   Writer: 'David Benioff, D.B. Weiss',
    //   Actors: 'Emilia Clarke, Peter Dinklage, Kit Harington',
    //   Plot: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.',
    //   Language: 'English',
    //   Country: 'United States, United Kingdom',
    //   Awards: 'Won 59 Primetime Emmys. 389 wins & 634 nominations total',
    //   Poster: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    //   Ratings:
    //   Metascore: 'N/A',
    //   imdbRating: '9.2',
    //   imdbVotes: '2,206,780',
    //   imdbID: 'tt0944947',
    //   Type: 'series',
    //   totalSeasons: '8',
    //   Response: 'True'


    </div>
  )
}