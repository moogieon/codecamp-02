https://programmers.co.kr/learn/courses/30/lessons/12950

// 행렬의 덧셈

function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    answer[i] = []; // 0일 때는 그대로 [] 이고 아니면 [],[] 추가가 된다.
    for (let l = 0; l < arr1[i].length; l++) {
      console.log(arr1[i], [l]); // arr1 과 arr2가 길이가 같기 때문에
      // arr2[i][l] 값이 나온다.?
      const sum = arr1[i][l] + arr2[i][l];
      answer[i][l] = sum;
      // answer[i].push(sum);
    }
  }
  return answer;
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!

function solution(arr1, arr2) {
    const answer = arr1.map((num1,i)=> {
        return num1.map ((num2, l)=> {
         return num2 + arr2[i][l];
        })
    })
     return answer;
}
