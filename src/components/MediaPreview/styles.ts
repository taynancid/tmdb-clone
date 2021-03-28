import styled from 'styled-components'

type ContainerProps = {
  index: number
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: ${({ index }) => (index === 0 ? 0 : 10)}px;

  > img {
    margin-bottom: 20px;
    border-radius: 8px;
    width: 150px;
  }

  .info {
    padding: 0px 10px;
    width: 150px;
    .title {
      font-weight: 600;
      margin-bottom: 3px;
    }
  }

  .vote-circle {
    position: absolute;
    top: 205px;
    left: 5px;
  }
`
