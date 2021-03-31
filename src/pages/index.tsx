// import api from 'helpers/api'
// import MediaShowcase from 'components/MediaShowcase'
import * as S from './styles'
// import { SelectorOptionType } from 'components/Selector'
import MainPageSearchBar from 'components/MainPageSearchBar'

// type Showcase = {
//   title: string
//   tabs: SelectorOptionType[]
// }

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  return {
    props: {}
  }
}

export default function Home() {
  // const [trendingShowcase] = useState<Showcase>({
  //   title: 'Trending',
  //   tabs: [
  //     {
  //       title: 'Movies',
  //       slug: 'movies',
  //       urlToGet: '/3/trending/movie/week'
  //     },
  //     {
  //       title: 'TV Shows',
  //       slug: 'tv-show',
  //       urlToGet: '/3/trending/tv/week'
  //     }
  //   ]
  // })

  return (
    <S.Container
      backgroundImg={
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg'
      }
    >
      <section>
        <S.SearchBarContainer>
          <MainPageSearchBar />
        </S.SearchBarContainer>
      </section>
      {/* <MediaShowcase
        title={trendingShowcase.title}
        selectorOptions={trendingShowcase.tabs}
      /> */}
    </S.Container>
  )
}
