https://programmers.co.kr/learn/courses/30/lessons/12921
소수 찾기

function solution(n) {
    var answer = 0;
    // 2부부터  n 까지의 숫자들을 담아주는 배열
    const numbers= []
    for(let i = 2; i<=n; i++){
       //numbers.push(i)
         numbers[i-2] = i        
    }
                  // i읜 제곱 값 보다 같거나 작을때 까지만 
    for(let i =2; i*i <= n; i++){
        if( numbers[i - 2]===false){
            continue;
        }
        for(let l = i*i; l<=n; l=l+i ){
             numbers[l - 2] =false;
        }
    }
    answer = numbers.filter(data =>data!== false) ;   
    return answer.length
}