import {useQuery,gql, useMutation} from '@apollo/client'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number:Int){
        deleteBoard(number:$number){
            message
        }
    }
`
export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD);
    console.log(data?.fetchBoards)
    const onClickDelete = (e) =>{
        Number(e.target.id) // 문자열이기 때문에 숫자로 바꾼다
        deleteBoard({
            variables:{number: Number(e.target.id)},
            refetchQueries : [{query: FETCH_BOARDS}] // 어떤 쿼리를 리패치 할껀지? 
        })
    }
    return(
        <div>
            {data?.fetchBoards.map( el => 
            <div key={el.number}>
                <span>
                    <input type='checkbox'/>
                </span>
                <span style={{ margin: "10px"}}>{el.number}</span> 
                <span style={{ margin: "10px"}}>{el.title}</span> 
                <span style={{ margin: "10px"}}>{el.writer}</span>
                <span>
                    <button id={el.number} onClick={onClickDelete}>삭제</button>
                </span>
            </div>)}
        </div>
    )
}