import styled from 'styled-components'

export const Container = styled.div``
export const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 2.5em;
    font-weight: 600;
    margin-right: 0.5em;
  }
`
export const TabsWrapper = styled.div`
  margin: 0px 10px;
`
export const Body = styled.div`
  display: flex;
  padding: 20px 0px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const ShimmerCardsContainer = styled.div`
  display: flex;
  > div {
    margin-right: 20px;
  }
`
