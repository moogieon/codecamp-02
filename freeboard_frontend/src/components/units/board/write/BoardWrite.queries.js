import { gql } from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard( $createBoardInput:CreateBoardInput! ){
    createBoard(createBoardInput:$createBoardInput){
        _id
        likeCount
        dislikeCount
    }
}

`
export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput:UpdateBoardInput!,$password: String,$boardId: ID!){
        updateBoard(updateBoardInput:$updateBoardInput,password:$password,boardid:$boardid
            ){
                _id
            }
    }
`