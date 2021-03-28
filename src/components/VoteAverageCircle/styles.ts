import styled from 'styled-components'

export const Container = styled.div`
  .svg {
    position: relative;
    display: block;
    margin: 1px auto;
    max-width: 100%;
    transform: rotate(-90deg);
  }

  > div {
    position: absolute;
    display: flex;
    left: 7px;
    bottom: 12px;

    .value-text {
      color: white;
      font-size: 11px;
      font-weight: 600;
    }
    .value-percentage {
      color: white;
      font-size: 7px;
    }
  }
  /* h1 {
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0 0 0.5em #fff;
    font-size: 46px;
    margin-bottom: 20px;
  } */
`
