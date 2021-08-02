https://programmers.co.kr/learn/courses/30/lessons/12954



function solution(x, n) {
    const answer= new Array(n)
    .fill(1)
    .map((number,index)=>{
        return x*(index+1)
        
    })
    return answer;
}
    var answer = [];
    for(let i = 1; i <= n; i++){
        // console.log(i)
        console.log(i)
        answer.push(i * x)
    }
    return answer;
}