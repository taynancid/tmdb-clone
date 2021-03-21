import styled from 'styled-components'

type SelectorOptionProps = {
  isSelected: boolean
}

export const SelectorOption = styled.div<SelectorOptionProps>`
  padding: 10px 10px;
  border-radius: 50px;

  h3 {
    color: ${(props) =>
      props.isSelected ? 'var(--green)' : 'var(--darkBlue)'};
  }
`
