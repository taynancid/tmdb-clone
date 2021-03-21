import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 50px;
  border: 1px solid var(--darkBlue);
`

type SelectedBackgroundProps = {
  width: number
  horizontalPosition: number
}

export const SelectedBackground = styled.div<SelectedBackgroundProps>`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: -1;
  background-color: var(--darkBlue);
  border: 1px solid var(--darkBlue);
  width: ${({ width }) => width}px;
  border-radius: 50px;
  transform: translateX(${({ horizontalPosition }) => horizontalPosition}px);
  transition: all ease 0.3s;
`
