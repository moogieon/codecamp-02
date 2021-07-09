import {useRouter} from "next/router"


export default function RouterPage() {
        const router = useRouter()

        function onClickMove(){
            router.push('/detail/1')/// 다이나믹 routing (숫자에 따라 주소가 바뀌는 동적routing)


        }
        return(
            <>
            <button onClick={onClickMove}>이동하기</button>
        
            </>
            
            )


}