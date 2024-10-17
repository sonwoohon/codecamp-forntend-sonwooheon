import {useQuery,gql} from '@apollo/client'

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
export default function StaticRoutingMovedPage(){
    const { data } = useQuery(FETCH_BOARDS)
    console.log(data?.fetchBoards)
    return(
        <div>
            {data?.fetchBoards.map( el => 
                <div>
                    <span style={{margin: "10px", display:"inline-block"}}>
                        <input type='checkbox' />
                    </span>
                        <span>{el.number}</span>
                    <span style={{margin: "10px", display:"inline-block"}}> {el.title}</span>
                    <span style={{margin: "10px", display:"inline-block"}}>{el.writer}</span>
                </div>
            )}
        </div>
    )
}