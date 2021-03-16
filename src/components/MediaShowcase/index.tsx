import * as S from './styles'

export type Tab = {
  title: string
  url: string
}

export type Props = {
  title: string
  tabs: Tab[]
}

const MediaShowcase = ({ title, tabs }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.TabsWrapper>{tabs.map((tab) => tab.title)}</S.TabsWrapper>
      </S.Header>
      <S.Body>movies</S.Body>
    </S.Container>
  )
}

export default MediaShowcase
