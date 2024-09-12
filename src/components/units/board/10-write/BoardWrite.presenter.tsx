
import { RedInput, BlueInput } from "./BoardWrite.styles"
import { IBoardWriteUIProps } from "./BoradWrite.Types"


export default function BoardWriteUI (props: IBoardWriteUIProps){

    return (
        <div>
            <div>#########여기 프리센터########</div>
            작성자: <RedInput type='text' onChange={props.onChangeWrite} defaultValue={props.data?.fetchBoard.writer} />
            제목: <input type='text' onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} />
            내용: <input type='text' onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
            <BlueInput onClick={props.isEdit? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit? "수정" : "등록"}하기
            </BlueInput>
            <div>#########여기 프리센터########</div>
        </div>
    )
}