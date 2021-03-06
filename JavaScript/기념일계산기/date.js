// 1. Date 객체 생성
let now = new Date();

// 2. 연도를 가져오는 메서드 (getFullYear)
console.log(now.getFullYear()); // 2021

// 3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
console.log(now.getMonth()); // 11

// 4. 일 정보를 가져오는 메서드 .getDate()
console.log(now.getDate()); // 15

// 5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
console.log(now.getTime()); // 1639528988771

// 6. 특정 일의 Date 객체 생성
let christmas = new Date('2021-12-25');
console.log(christmas); // 2021-12-25T00:00:00.000Z

// 7. 특정 ms의 Date 객체 생성
let ms = new Date(1000);
console.log(ms); // 1970-01-01T00:00:01.000Z (1970년 1월 1일 기준으로 특정 ms가 지난 시점/ 여기서는 1000ms)