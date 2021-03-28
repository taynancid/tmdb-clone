import { useEffect, useState, useCallback } from 'react'

export type SelectorOptionType = {
  title: string
  slug: string
  urlToGet: string
}

const useSelector = () => {
  const [selectedWidth, setSelectedWidth] = useState<number>(0)
  const [optionsWidth, setOptionsWidth] = useState<number[]>([])
  const [horizontalPosition, setHorizontalPosition] = useState<number>(0)

  useEffect(() => {
    if (optionsWidth[0] !== 0) {
      setSelectedWidth(optionsWidth[0])
    }
  }, [optionsWidth])

  const onSetOptionWidth = useCallback((width = 0, index = 0) => {
    setOptionsWidth((previousOptionsWidth) =>
      Object.assign([...previousOptionsWidth], { [index]: width })
    )
  }, [])

  const changeSelectedBackground = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number): void => {
      setHorizontalPosition(() => {
        if (index === 0) return 0

        return optionsWidth.reduce((acc, currValue, widthIndex): number => {
          if (widthIndex >= index) return acc

          return acc + currValue
        }, 0)
      })
      setSelectedWidth(e.currentTarget.offsetWidth)
    },
    [optionsWidth]
  )

  return {
    changeSelectedBackground,
    onSetOptionWidth,
    selectedWidth,
    horizontalPosition
  }
}

export default useSelector
