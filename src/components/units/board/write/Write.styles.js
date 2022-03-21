import styled from '@emotion/styled'

export const Writer = styled.input`
  border:1px solid green;
`

export const Title = styled.input`
  border:1px solid green;
`

export const Content = styled.input`
  border:1px solid green;
`

export const Button = styled.button`
  background-color: ${(props) => props.isActive ? "yellow" : "none"};
`