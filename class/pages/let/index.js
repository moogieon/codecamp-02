

// react 쓰기전 카운터 


export default function StagePage () {

    let count = 0

    function aaa() {
        
       
        document.getElementById('rrr').innerText =count += 1
        console.log(count)
    }


    return (
        <>
            <div id="rrr">{count}</div> 
            <button onClick={aaa}>+1</button>
        </>
    )
    
}
