import { gql } from "@apollo/client"

export const FETCH_BOARD = gql`          
query fetchBoard($boardID:ID!) {
    fetchBoard(boardId:$boardID)
    {   writer
        title
        contents
        youtubeUrl
        createdAt
    }
    
}
`

export const DELETE_BOARD= gql`
mutation       deleteBoard(        $delete:ID!){
                deleteBoard(boardid:$delete)

    }

`