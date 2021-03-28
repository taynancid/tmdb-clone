import VoteAverageCircle from 'components/VoteAverageCircle'
import * as S from './styles'
import format from 'date-fns/format'
import { useMemo } from 'react'

const baseImgUrl = 'https://image.tmdb.org/t/p/original'

type Props = {
  index: number
  id: number
  title: string
  releaseDate: string
  posterPath: string
  voteAverage: number
}

const MediaPreview = ({
  index,
  title,
  releaseDate,
  posterPath,
  voteAverage
}: Props) => {
  const formattedDate = useMemo(() => {
    return format(new Date(releaseDate), 'PP').toString()
  }, [releaseDate])

  return (
    <S.Container index={index}>
      <img src={baseImgUrl + posterPath} />
      <div className="info">
        <h3 className="title">{title}</h3>
        <span className="release-date">{formattedDate}</span>
      </div>
      <div className="vote-circle">
        <VoteAverageCircle size={35} value={voteAverage * 10} />
      </div>
    </S.Container>
  )
}

export default MediaPreview
