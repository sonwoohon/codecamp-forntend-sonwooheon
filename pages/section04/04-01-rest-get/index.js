import axios from 'axios'
import 나만의페이지 from'../../section01/01-01-example'
export default function RestGetPage(){
    
    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // Promise
    }
    //async function onClickSync(){
    //    const result = await axios.get("https://koreanjson.com/posts/1")     =>함수 중복선언 문제
    //    console.log(result) // 제대로된 결과 => { title: "..."}
    //    console.log(result.data.title) // 제대로된 결과 => { title: "..."}
    //}
            
    const onClickSync = async() => {
            const result = await axios.get("https://koreanjson.com/posts/1") 
            console.log(result) // 제대로된 결과 => { title: "..."}
            console.log(result.data.title) // 제대로된 결과 => { title: "..."}

        }

    // - Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
    // - Fulfilled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해 준 상태
    // - Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태    
    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
            <나만의페이지/>
        </div>
    )
}