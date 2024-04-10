import {useQuery,gql} from '@apollo/client'

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:10){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutingMovedPage(){
    const { data } = useQuery(FETCH_BOARD)
    console.log(data)
    return(
        <div>
            <div>1번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </div>
    )
}