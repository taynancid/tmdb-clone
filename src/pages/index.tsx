import api from 'helpers/api'
import MediaShowcase from 'components/MediaShowcase'
import { useState } from 'react'
import * as S from './styles'
import { SelectorOptionType } from 'components/Selector'

type Showcase = {
  title: string
  tabs: SelectorOptionType[]
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await api.get('/3/trending/tv/week')
  const { results: trendingMovies } = await res.data
  console.log(trendingMovies)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      trendingMovies
    }
  }
}

export default function Home() {
  const [trendingShowcase] = useState<Showcase>({
    title: 'Trending',
    tabs: [
      {
        title: 'Movies',
        slug: 'movies',
        urlToGet: '/3/trending/movie/week'
      },
      {
        title: 'TV Shows',
        slug: 'tv-show',
        urlToGet: '/3/trending/tv/week'
      }
    ]
  })

  return (
    <S.Container>
      <MediaShowcase
        title={trendingShowcase.title}
        selectorOptions={trendingShowcase.tabs}
      />
    </S.Container>
  )
}
