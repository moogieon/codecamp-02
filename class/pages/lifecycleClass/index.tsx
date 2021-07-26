import { Component, createRef } from "react";
import Router from "next/router";

interface IPrev{
    count: number;
}
export default class lifecycleClassPage extends Component{
    state ={
    count:0 ,
    
    }

    // inpufRef 이름임
    inputRef = createRef<HTMLInputElement>()
    
    componentDidMount() {
        console.log('마운트 완료')
        this.inputRef.current?.focus()
    }

    componentDidUpdate(){
        console.log('컴포넌틑 변경됨!')
    }

    componentWillUnmount(){
        alert('잘가...')
    }

    onCilckCount = () => {
        this.setState((prev: IPrev)=>({
            count: prev.count+1
        }))
    }

    onClickMOve=()=>{
        Router.push('/')
    }
    
     render(){
         return(
             <>
             <input ref={this.inputRef} type="password"></input>
             <div>카운트: {this.state.count}</div>
             <button onClick={this.onCilckCount}>+ 1</button>
             <div> class형 컴포넌트 </div>
             <button onClick={this.onClickMOve}> 나가기</button>
             </>
         )
     }
}