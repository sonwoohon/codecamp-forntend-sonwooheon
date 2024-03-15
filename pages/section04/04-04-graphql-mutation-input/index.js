import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer : String, $title: String, $contents: String){

        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
}
`


export default function GraphqlMutationPage(){
    const [writer, setwriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result =  await 나의함수({
            variables: {                        // "variables"가 $ 역을함, $를 사용해도 무방 
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangewriter = (event) => {
        setwriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <div>
            작성자: <input type='text' onChange={onChangewriter} />
            제목: <input type='text' onChange={onChangeTitle} />
            내용: <input type='text' onChange={onChangeContents} />
            <button onClick={onClickSubmit}>HRAPHQL-API 요청하기</button>
        </div>
    )
    

}