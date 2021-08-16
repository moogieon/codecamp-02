예산
https://programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
    
    return d.sort((a,b)=>a-b)
              .filter(price => {
        budget -= price;
        
        if(budget >= 0){
            return price
        }
    }).length
//////////////////////////////////////////////////

function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>a-b);
    
    // 지원 할 수 있는 예싸능ㄹ 담아주는 배열 
    const arr = []
    for(let i = 0; i<d.length; i++){
        budget -= d[i]
        if (budget >= 0){
            arr.push[i]
        }
      
    }
    return arr
}

//////////////////////////////////////////////////
   function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>a-b);
  
    for (let i =0; i<d.length; i++){
        budget -=d[i]
        // budget = budget -d[i]
        if(budget <= 0){
            if(budget < 0){
                return i;
            }else if(budget === 0){
                return i+ 1;
            }
            break
        }
    }
    if(budget > 0){
        return d.length;
    }
    return answer;
}