import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'
export default function BoardWrite() {
    const router = useRouter()


    const [writer, setWriter] = useState('')
    const [passwrod, setPasword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [active, setActive] = useState(false)


    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeWriter(event) {
        setWriter(event.target.value)
        setActive(event.target.value && passwrod && title  && contents  ? true : false)
        // setActive(event.target.value !== "" && passwrod !== "" && title !== "" && contents !== "" ? true : false)
        // false: 앞에 !를 붙히면  false가됨 예) !true(false) 


    }


    function onChangePassword(event) {
        setPasword(event.target.value)
        setActive(writer !== "" && event.target.value !== "" && title !== "" && contents !== "" ? true : false)
        // setPoint(writer !=="" && event.target.value !=="" && title !==""&& contents !=="" ?true:false)

    }


    function onChangeTitle(event) {
        setTitle(event.target.value)
        setActive(writer !== "" && passwrod !== "" && event.target.value !== "" && contents !== "" ? true : false)
        // setPoint(writer !=="" && passwrod !=="" && event.target.value !==""&& contents !=="" ?true:false)


    }

    function onChangeContents(event) {
        setContents(event.target.value)
        setActive(event.target.value !== "" && passwrod !== "" && title !== "" && writer !== "" ? true : false)
        // setPoint ( event.target.value !=="" && passwrod !=="" && title !==""&& writer!=="" ?true:false)


    }



    async function onClickSubmit() {
        // console.log(name)
        // console.log(age)
        // console.log(school)

        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: passwrod,
                        title: title,
                        contents: contents,
                    }

                }

            })
            alert("등록 완료!!")
            router.push(`detail/${result.data.createBoard._id}`)

        } catch (error) {
            alert(error.message)

        }
    }
    // ----------------------------------------------------------------------------------------
    return (
        <BoardWriteUI
            aaa={onChangeWriter}
            bbb={onChangePassword}
            ccc={onChangeTitle}
            ddd={onChangeContents}
            eee={onClickSubmit}
            fff={active}

        />

    )
}
