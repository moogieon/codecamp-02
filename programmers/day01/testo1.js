//! 같은 숫자는 싫어 
//배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
//arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
//arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

function solution(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }

    }

    return result;
}

//! 문자열을 정수로 바꾸기
//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

const solution = (s) => Number(s);

//! 휴대폰 번호 가리기 
//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
//전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(num) {

    let password = '';

    let answer = '';

    for (let i = 0; i < num.length; i = i + 1) {
        if (i < num.length - 4) {
            password += '*';
            //pasword = password+'*';
        }
        else {
            answer += num[i];
        }

    }
    return password + answer;
}
