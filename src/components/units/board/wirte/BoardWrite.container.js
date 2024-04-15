import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { 나의그래프큐엘셋팅 } from './BoardWrite.queries'

export default function BoardWrite (){
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

    return(
        <BoardWriteUI 
            aaa={onClickSubmit}
            bbb={onChangewriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}
        />
    )
}