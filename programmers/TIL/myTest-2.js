https://programmers.co.kr/learn/courses/30/lessons/12934
// 제곱근 구하기 !
function solution(n) {
    // 초기 제곱근 값 
    let sqrt = 1;
    
    while((sqrt * sqrt)<n){
        sqrt++
        
        if( (sqrt*sqrt)> n ){
            return -1;
        }
    }
    sqrt ++
    
    console.log(sqrt)

    return sqrt * sqrt;
}
 //////// !! 
let sqrt = Math.sqrt(n)
console.log(sqrt)
    if(Number.isInteger(sqrt) === true ){
        sqrt ++ 
        return sqrt * sqrt
        
    }else{
        return -1
    }

}