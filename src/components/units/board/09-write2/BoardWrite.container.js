import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'


export default function BoardWrite (props){
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result =  await 나의함수({
            variables: {                        // "variables"가 $ 역을함, $를 사용해도 무방 
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push( `/section09/09-04-boards/${result.data.createBoard.number}`)
    }
    const onClickUpdate = async () => {
        const myvariabels = {
            number : Number(router.query.number)
        }
        if(writer)myvariabels.writer = writer
        if(title)myvariabels.title = title
        if(contents)myvariabels.contents = contents
        
        // 여기서 수정하기 하자!! 
        const result = await updateBoard({
            variables :myvariabels
        })
        router.push( `/section09/09-04-boards/${result.data.updateBoard.number}`)
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
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            onChangeWrite={onChangeWrite}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={props.isEdit}
            data={props.data} // undefind 이거나, data이거나 둘 중 하나 
        />
    )
}