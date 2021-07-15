import { useQuery } from '@apollo/client'
import BoardListUi from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'


export default function BoardList() {

    const { data } = useQuery(FETCH_BOARDS)

    return (
        <BoardListUi
            onData={data}
        
        
        
        
        />

    )
}