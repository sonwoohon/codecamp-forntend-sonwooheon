import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { 나의그래프큐엘셋팅 } from './BoardWrite.queries'
//import Asdlksldk from './BoardWrite.queries' // export default 이름 바꿔서 가져오기
//import Asdlksldk, { apple }from './BoardWrite.queries' // export default와 export 함께가져오기 
//import * as QQQ from "./BoardWrite.styles" // style 모두 가져오기 ex) QQQ.button, QQQ.div

export default function BoardWrite (){
    const [writer, setWriter] = useState()
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

    const onChangeWrite = (event) => {
        setWriter(event.target.value)
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
            bbb={onChangeWrite}
            ccc={onChangeTitle}
            ddd={onChangeContents}
        />
    )
}