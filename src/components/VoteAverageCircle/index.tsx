import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

type Props = {
  size: number
  value: number
}

const VoteAverageCircle = ({ size, value }: Props) => {
  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)

  const strokeWidth = 3
  const circleOneStroke = 'black'
  const circleTwoStroke = 'green'

  const center = size / 2
  const radius = size * 0.5 - strokeWidth * 0.5
  const circumference = 2 * Math.PI * (size * 0.5 - strokeWidth)

  useEffect(() => {
    const progressOffset = ((100 - value) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, circumference, value, offset])

  return (
    <S.Container>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle-progress"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius * 0.9}
          strokeWidth={2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div>
        <span className="value-text">{value}</span>
        <span className="value-percentage">%</span>
      </div>
    </S.Container>
  )
}

export default VoteAverageCircle
