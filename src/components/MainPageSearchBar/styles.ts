import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.5em;

  > input {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: none;
    padding: 10px 20px;
    line-height: 46px;
  }

  > div {
    position: absolute;
    height: 100%;
    padding: 10px 26px;
    right: 0;
    top: 0;
    border-radius: 30px;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    cursor: pointer;

    background: linear-gradient(
      to right,
      rgba(var(--lightGreen), 1) 0%,
      rgba(var(--lightBlue), 1) 100%
    );

    &:hover {
      > span {
        color: var(--darkBlue);
      }
    }

    > span {
      color: white;

      transition: color 0.1s ease-in;
    }
  }
`
