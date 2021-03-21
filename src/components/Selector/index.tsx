import React, { useCallback } from 'react'
import * as S from './styles'
import SelectorOption from './components/SelectorOption'
import useSelector from './useSelector'

export type SelectorOptionType = {
  title: string
  slug: string
  urlToGet: string
}

type Props = {
  options: SelectorOptionType[]
  selectedOption: SelectorOptionType
  setSelectedOption: (option: SelectorOptionType) => void
}

const Selector = ({ options, selectedOption, setSelectedOption }: Props) => {
  const {
    handleSelectOption,
    onSetOptionWidth,
    selectedWidth,
    horizontalPosition
  } = useSelector()

  const onSetOptions = useCallback(
    (width: number, index: number) => onSetOptionWidth(width, index),
    [onSetOptionWidth]
  )

  return (
    <S.Container>
      {options.map((option, index) => (
        <SelectorOption
          key={option.slug}
          isSelected={option.slug === selectedOption?.slug}
          onClicked={(e: React.MouseEvent<HTMLDivElement>) => {
            handleSelectOption(e, index)
            setSelectedOption(option)
          }}
          name={option.title}
          onSetOptionWidth={onSetOptions}
          index={index}
        />
      ))}
      <S.SelectedBackground
        width={selectedWidth}
        horizontalPosition={horizontalPosition}
      />
    </S.Container>
  )
}

export default Selector
