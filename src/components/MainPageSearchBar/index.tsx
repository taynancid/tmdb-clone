import * as S from './styles'

const MainPageSearchBar = () => {
  return (
    <S.Container>
      <input placeholder="Search for a movie, tv show or person....." />
      <div>
        <span>Search</span>
      </div>
    </S.Container>
  )
}

export default MainPageSearchBar
