import { RedInput, BlueInput } from "./BoardWrite.styles"

export default function BoardWriteUI (props){

    return (
        <div>
            <div>#########여기 프리센터########</div>
            작성자: <RedInput type='text' onChange={props.bbb} />
            제목: <input type='text' onChange={props.ccc} />
            내용: <input type='text' onChange={props.ddd} />
            <BlueInput onClick={props.aaa}>GRAPHQL-API 요청하기</BlueInput>
            <div>#########여기 프리센터########</div>
        </div>
    )
}