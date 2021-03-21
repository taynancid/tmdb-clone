import React, { useEffect, useRef } from 'react'
import * as S from './styles'

type SelectorOptionProps = {
  isSelected: boolean
  onClicked: (e: React.MouseEvent<HTMLDivElement>) => void
  name: string
  onSetOptionWidth: (width: number, index: number) => void
  index: number
}

const SelectorOption = ({
  isSelected,
  onClicked,
  name,
  onSetOptionWidth,
  index
}: SelectorOptionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onSetOptionWidth(ref.current?.offsetWidth || 0, index)
  }, [onSetOptionWidth, index])

  return (
    <S.SelectorOption ref={ref} isSelected={isSelected} onClick={onClicked}>
      <h3>{name}</h3>
    </S.SelectorOption>
  )
}

export default SelectorOption
