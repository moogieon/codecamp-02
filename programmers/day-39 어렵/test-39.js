https://programmers.co.kr/learn/courses/30/lessons/64061
크레인 인형뽑기 게임

function solution(board, moves) {
    let answer = 0;
    const basket = []
    for(let i =0; i< moves.length; i++){
        for(let l =0; l< board.length; l++){
            const doll = board[l][moves[i]-1];
        
            if(doll === 0){
              // 인형이 없느 경우  
                continue
            }else{
                //인형이 있는 경우
                if(basket [basket.length - 1] === doll ){
                    basket.splice(basket.length -1, 1)
                    answer += 2;
                }else{
                        basket.push(doll)
                }
            
                board[l][moves[i] -1] = 0
                break
            }
        }
            
    }
    console.log(basket)
    return answer;
}
// ///////////////////////////////////////////

function solution(board, moves) {
    let answer = 0;
    // 인형 담는 배열
    const basket = []
    
    moves.forEach((location, i)=> {
        let checked = false
        board.forEach((arr,l)=> {
            const doll = arr[moves[i] -1];
            
            if(checked === false){
            if(doll !== 0){
                if(basket [basket.length- 1]=== doll){
                    basket.splice(basket.length -1, 1)
                    answer += 2
                }else{
                    basket.push(doll)
                }
                arr[moves[i]-1] = 0
                checked = true
                }
            }
        })
    })
    return answer;
}




