import { useQuery } from '@apollo/client'
import BoardAdminUI from './Boaradmin.presenter'
import { FETCH_BOARDS } from './Boaradmin.queries'


export default function BoardAdmin() {

    const { data } = useQuery(FETCH_BOARDS)

    return (
        <BoardAdminUI 
            onData={data}
        
        
        
        
        />

    )
}