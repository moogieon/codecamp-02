//programmers.co.kr/learn/courses/30/lessons/70128
https: 내적;

function solution(a, b) {
  //     return a.map((num,i)=>{
  //         return a[i]*b[i]
  //     }).reduce((el,cu)=>el +cu)

  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
    // console.log(a[i])
  }
  return answer;
}
