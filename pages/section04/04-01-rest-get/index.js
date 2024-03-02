import axios from 'axios'

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
    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </div>
    )
}