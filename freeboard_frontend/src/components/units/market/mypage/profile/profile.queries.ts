import { gql } from "@apollo/client";

// const UPDATE_USER = gql`
//     mutation updateUser(updateUserInput: UpdateUserInput!){
//             updateUser(updateUserInput: UpdateUserInput!){
//                 _id

//             }
//         }
// `;

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;
