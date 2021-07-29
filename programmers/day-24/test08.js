// 프로그래머스>완전 탐색 >모의고사

const answer1 = [1, 2, 3, 4, 5];

const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];

const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function solution(answers) {
  //수포자들에 대한 각자의 점스루으 저장히는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answer1[i % answer1.length]) {
      score[0]++;
    }
    if (answers[i] === answer2[i % answer2.length]) {
      score[1]++;
    }
    if (answers[i] === answer3[i % answer3.length]) {
      score[2]++;
    }
  }
  // const max =Math.max.appy(null,scroe) ;
  const max = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}
/// 또는 ///
const anserList = [
  [1, 2, 3, 4, 5],

  [2, 1, 2, 3, 2, 4, 2, 5],

  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  //수포자들에 대한 각자의 점스루으 저장히는 배열
  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < anserList.length; l++)
      if (anserList[l][i % anserList[l].length] === answers[i]) {
        score[l]++;
      }
  }
  // const max =Math.max.appy(null,scroe) ;
  const max = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}
/// 또는 ///
const answerList = [
  [1, 2, 3, 4, 5],

  [2, 1, 2, 3, 2, 4, 2, 5],

  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  const score = [0, 0, 0];

  answers.forEach((el, i) => {
    answerList.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        score[l]++;
      }
    });
  });
  const max = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}
