import Link from 'next/link'
import api from 'helpers/api'

type Movie = {
  id: number
  title: string
  poster_path: string
}

type HomeProps = {
  trendingMovies: Movie[]
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await api.get('/3/trending/movie/week')
  const { results: trendingMovies } = await res.data

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      trendingMovies
    }
  }
}

export default function Home({ trendingMovies }: HomeProps) {
  // useEffect(() => trendingMovies.map((movie) => console.log(movie.title)), [])
  return (
    <div>
      {trendingMovies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <a>{movie.title}</a>
        </Link>
      ))}
    </div>
  )
}
