import Selector, { SelectorOptionType } from 'components/Selector'
import api from 'helpers/api'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type Props = {
  title: string
  selectorOptions: SelectorOptionType[]
}

const MediaShowcase = ({ title, selectorOptions }: Props) => {
  const [selectedOption, setSelectedOption] = useState<SelectorOptionType>(
    selectorOptions[0]
  )

  useEffect(() => {
    api
      .get(selectedOption.urlToGet)
      .then(({ data }) => console.log(data.results))
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
      <S.Body>movies to be added</S.Body>
    </S.Container>
  )
}

export default MediaShowcase
