// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

function solution(seoul) {
    //  Kik 의 위치를 찾아주는 변수
    // const x = seoul.indexOf('Kim')
    let x = ''
    for (let i = 0; i < seoul.length; i++)
        if (seoul[i] === 'Kim') {
            x = i;
        }


    return '김서방은 ' + x + '에 있다';
}


// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
    // const result = s.length%2===1 ? s[Math.floor(s.length/2)] : s[(s.length/2)-1] + s[s.length/2]
    //  




    var result = '';

    if (s.length % 2 === 1) {
        result = s[Math.floor(s.lnegth / 2)]
        // 5/2 === 2.5 => 2 

    } else {  // 대괄호는 s 의 index 값을 가저오기 위해서
        result = s[(s.length / 2) - 1] + s[s.lenght / 2]

    }
    return result;

}

// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution(a, b) {
    // 

    var answer = 0;
    if (a === b) {
        return a;
    } else {
        // 반복문이 실행될 때 설정되는 초기값(a 와 b중에 작은 값이 들어옵니다.)
        let start = a > b ? b : a
        // let end = Math.end(a.b) 가장 작은 값을 반환

        // 반복문이 종료되는 조건을 설정  (a와 b중에 큰값이 들어 옵니다.)
        let end = a > b ? a : b
        // let end = Math.max(a.b); 가장 큰 값을 반환
        for (let i = start; i <= end; i++) {
            answer = answer + i;
        }

    }


    return answer;
}