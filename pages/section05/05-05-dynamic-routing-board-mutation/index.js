import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {

        try{
            // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄둘을 모두 무시하고, catch에 있는 내용이 실행

            const result =  await 나의함수({
                variables: {                        // "variables"가 $ 역을함, $를 사용해도 무방 
                    write :"훈이",
                    title : "안녕하세요!!!",
                    contents : "반갑습니다"
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        }catch(error){
            alert(error.message)
        }
    }


    
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>HRAPHQL-API 요청하기</button>
    

}