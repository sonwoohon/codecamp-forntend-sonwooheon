import { RedInput, BlueInput } from "./BoardWrite.styles"

export default function BoardWriteUI (props){

    return (
        <div>
            <div>#########여기 프리센터########</div>
            작성자: <RedInput 
                    type='text' 
                    onChange={props.onChangeWrite} />
            제목: <input type='text' onChange={props.onChangeTitle} />
            내용: <input type='text' onChange={props.onChangeContents} />
            <BlueInput 
            onClick={props.onClickSubmit}
            isActive={props.isActive}
            >
                GRAPHQL-API 요청하기
            </BlueInput>
            <div>#########여기 프리센터########</div>
        </div>
    )
}