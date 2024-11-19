import {useQuery,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/type'

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutingMovedPage(){
    const router = useRouter()
    console.log(router)
    const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables:{ number:Number(router.query.qqq) }
    })
    console.log(data)
    return(
        <div>
            <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : {data?.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data?.fetchBoard?.contents}</div>
        </div>
    )
}