import * as S from './styles'

type Props = {
  width: number
  height: number
}

const ShimmerCard = ({ height, width }: Props) => {
  return <S.Container height={height} width={width} />
}

export default ShimmerCard
