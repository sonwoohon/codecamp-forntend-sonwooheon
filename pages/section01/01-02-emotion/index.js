import {MyEmail, MyEmailInput} from '../../../styles/01-02-emotion'

export default function EmotionPage(){

    // 자스 쓰는곳
    return (
        <div>
            <MyEmail>이메일</MyEmail>
            <MyEmailInput type="text"/>
            <button>클릭하세요!</button>
            <img src="/next.svg" />
        </div>
    )   
}