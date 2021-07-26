import { useEffect, useRef } from "react"

export default function useRefPage( ){

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus()    // current 자바스크립트 
    },[])

    return(
        <>
        <input type="password" ref={inputRef}></input>
        <button>등록하기</button>
        <div>
            하이 
        </div>
        </>
    )

}