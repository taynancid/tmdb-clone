import api from 'helpers/api'
import { GetStaticPaths } from 'next'

type Params = {
  params: {
    id: string
  }
}

type Props = {
  movie: Movie
}

type Movie = {
  id: number
  poster_path: string
  overview: string
  original_title: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps = async ({ params }: Params) => {
  try {
    const res = await api.get(`/3/movie/${params.id}`)
    const movie: Movie = await res.data
    return {
      props: {
        movie
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default function MovieDetails({ movie }: Props) {
  return (
    <div>
      {movie?.id}
      {movie?.original_title}
      {movie?.overview}
      {movie?.poster_path}
    </div>
  )
}
