import styled from '@emotion/styled';

export const RedInput = styled.input`
    border-color:red
`
export const BlueInput = styled.button`
    background-color: ${ (props) => props.isActive ? "yellow" : ""}

`