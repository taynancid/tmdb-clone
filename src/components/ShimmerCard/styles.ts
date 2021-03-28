import styled from 'styled-components'

type ContainerProps = {
  height: number
  width: number
}

export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: 8px;

  background-repeat: no-repeat;
  animation: shimmering forwards 1s ease-in-out infinite;

  @keyframes shimmering {
    from {
      background-color: var(--white);
    }

    to {
      background-color: var(--shimmer-card-bg-color);
    }
  }
`
