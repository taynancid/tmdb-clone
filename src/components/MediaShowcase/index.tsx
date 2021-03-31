import Selector, { SelectorOptionType } from 'components/Selector'
import api from '../../helpers/api'
import { useState, useEffect } from 'react'
import * as S from './styles'
import MediaPreview from '../MediaPreview'
import ShimmerCard from 'components/ShimmerCard'

// const mockMediaList = [
//   {
//     id: 1,
//     title: 'Justice League',
//     poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
//     vote_average: 8.8,
//     release_date: '2021-03-18',
//     media_type: 'movie'
//   },
//   {
//     id: 2,
//     title: 'Raya and the Last Dragon',
//     poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
//     vote_average: 8.4,
//     release_date: '2021-03-03',
//     media_type: 'movie'
//   },
//   {
//     id: 3,
//     title: 'Coming 2 America',
//     poster_path: '/nWBPLkqNApY5pgrJFMiI9joSI30.jpg',
//     vote_average: 6.9,
//     release_date: '2021-03-05',
//     media_type: 'movie'
//   }
// ]

export type Props = {
  title: string
  selectorOptions: SelectorOptionType[]
}

export type MediaPreview = {
  id: number
  title: string
  original_name: string
  vote_average: number
  release_date: string
  first_air_date: string
  poster_path: string
  media_type: 'tv' | 'movie'
}

// const imgPath = 'https://image.tmdb.org/t/p/w500/'

const loadingItems = Array(10).fill(null)

const MediaShowcase = ({ title, selectorOptions }: Props) => {
  const [selectedOption, setSelectedOption] = useState<SelectorOptionType>(
    selectorOptions[0]
  )
  const [mediaList, setMediaList] = useState<MediaPreview[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)

  useEffect(() => {
    console.log(mediaList)
  }, [mediaList])

  useEffect(() => {
    setIsFetching(true)
    api
      .get(selectedOption.urlToGet)
      .then(({ data }) => setMediaList(data.results))
      .finally(() => setIsFetching(false))
  }, [selectedOption])

  return (
    <S.Container>
      <S.Header>
        <h2>{title}</h2>
        <Selector
          options={selectorOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </S.Header>
      <S.Body>
        {!isFetching ? (
          mediaList.map((media, index) => (
            <MediaPreview
              index={index}
              key={media.id}
              id={media.id}
              title={media.title ? media.title : media.original_name}
              releaseDate={
                media.release_date ? media.release_date : media.first_air_date
              }
              posterPath={media.poster_path}
              voteAverage={media.vote_average}
            />
          ))
        ) : (
          <S.ShimmerCardsContainer>
            {loadingItems.map((_, index) => (
              <ShimmerCard key={index} height={225} width={150} />
            ))}
          </S.ShimmerCardsContainer>
        )}
      </S.Body>
    </S.Container>
  )
}

export default MediaShowcase
