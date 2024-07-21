import styled from '@emotion/styled';

export const Wrap = styled.div`
    width:1200px;
    margin:0 auto;
    box-shadow: 0px 0px 4px #bdbdbd;
    padding:60px 100px;
    box-sizing: border-box;
`
export const Title = styled.h1`
    font-size: 36px;
    font-weight:700;
    text-align:center;
`
export const Flex = styled.div`
    display:flex;
`

export const Div100 = styled.div`
    width:100%;
    margin-bottom:40px;
`

export const Div50 = styled.div`
    width:50%;
    margin-bottom:40px;
`

export const Label = styled.label`
    font-size: 16px;
    
`
export const Input = styled.input`
    margin-top:20px;
    width:100%;
    padding: 16px 14px;
`

export const Addresss = styled.input`
    width:45px;
    padding: 16px 14px;
    color:#BDBDBD;

    &::placeholder {
    color:#BDBDBD;
    }
`


export const AddressBtn = styled.button`
    padding: 16px 14px;
    color:#fff;
    background-color: #000;
    border:0;
    margin-left:20px
`
export const Textarea = styled.textarea`
    width: 100%;
    height: 480px;
    padding: 14px 16px;
    margin-top:20px;
    resize: none;
`