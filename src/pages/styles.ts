import styled from 'styled-components'

type ContainerProps = {
  backgroundImg: string
}

export const Container = styled.div<ContainerProps>`
  max-width: 1300px;
  height: 300px;
  margin: auto;
  align-self: center;

  > section {
    background-image: url('${(props) => props.backgroundImg}');
    background-size: cover;
    height: calc(100vh / 2.5);
    min-height: 300px;
    max-height: 360px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const SearchBarContainer = styled.div`
  width: 80%;
  height: 46px;
`
