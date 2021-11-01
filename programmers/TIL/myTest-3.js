// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"
function solution(num) {
  let answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }

  return answer;
}
// answer = num %2 === 0 ? 'Even' : 'Odd'
// 삼항 연산자   ?일 경우 'Evan' :아닐경우 'Odd'
//!!
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5
function solution(arr) {
  var answer = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    result += arr[i];
    //result = result + arr[1]
  }

  answer = result / arr.length;

  return answer;
}
//!!
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"
function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i = i + 1)
    // 삼항 연산잔: answer = answer+(i%2 === 0 ? '수' : '박');
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }

  return answer;
}
