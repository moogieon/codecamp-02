https://programmers.co.kr/learn/courses/30/lessons/17681
비밀지도
3진법


function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map((number)=> number.toString(2).padStart(n, "0")) 
    arr2 = arr2.map((number)=> number.toString(2).padStart(n, "0"))
    

    // 안쪽에 있는 값을 가져오기 위함
    for (let i=0; i < arr1.length; i++){
        //공백과 지도를 저장해주는 변수
        let str = ''
        for(let l = 0 ; l <arr1.length; l++){
            if(arr1[i][l] === '1'|| arr2[i][l]=== '1'){
                str += '#'  // 지도중 하나라도 벽일 경우
            }else{
                str += ' '  // 지도 모두 벽이 아닐 경우
            }
            // console.log(arr1[i][l],arr2[l][i])\
        }
          answer.push(str)
    }
    return answer
}



// --------------------
function solution(n, arr1, arr2) {
    // 10 진법 -> 2진법으로 변경
arr1 = arr1.map((number)=> number.toString(2).padStart(n, "0")) 
arr2 = arr2.map((number)=> number.toString(2).padStart(n, "0"))

return arr1.map((el,i)=> {
    return arr2.map((cu,l)=>{
        return el[l] === '1'|| arr2[i][l] == '1'
        ?'#'
        :' '         
    }).join("")
})
}