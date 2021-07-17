// K번째수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.


function solution(array, commands) {
    const answer = commands.map(el => {
      const sliceResult = array
       .slice(el[0]-1, el[1])
       .sort(function(a,b){return a - b})
       
      return sliceResult[el[2]-1]
        
   })
    return answer
    }
  // var answer = [];
  // for(let idx = 0; idx<commands.length; idx=idx+1){
  //     const i = commands[idx][0];
  //     const j = commands[idx][1];
  //     const k = commands[idx][2];
  //     
  //     //배여ㅛㄹ을 slice 한 결과를 담아주는 변수
  //     const sliceResult = array.slice(i -1, j).sort()
  //     answer.push(sliceResult[k-1]);
  // }
  // 
  // return answer;
//}

//!-----------------------------------------
// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

function solution(s) {
    var answer = '';
    let arr=[];
    // 문자열을 배열로 만들어주기 위한 변수
    // arr = split("") 
    
    //for(let i=0; i<s,length; i=i+1){
    //    arr.push(s[i])
   // }
    
    arr = s.split('')
    arr= arr.sort().reverse()
    
    for(let i=0; i<arr.length; i=i+1){
        answer =answer+arr[i]
    }
   // 배열을 합처주는 메서드
   // answer = arr.join("")
    return answer;
}