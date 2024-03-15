import { useMutation, gql } from '@apollo/client'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($write : String, $title: String, $contents: String){

        createBoard(writer: $write, title: $title, contents: $contents){
            _id
            number
            message
        }
}
`


export default function GraphqlMutationPage(){

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result =  await 나의함수({
            variables: {                        // "variables"가 $ 역을함, $를 사용해도 무방 
                write :"훈이",
                title : "안녕하세요!!",
                contents : "반갑습니다"
            }
        })
        console.log(result)
    }


    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>HRAPHQL-API 요청하기</button>
    

}