function selectionSort(array, order) {
  // call by reference로 인해 원본이 수정되는 것을 막기 위해
  // string으로 전달받은 배열을 parse 해준다.
  array = JSON.parse(array);

  for (let [idx, value] of array.entries()) {
    let targetIndex = idx;
    let leastValue = value;

    for (let index = idx + 1; index < array.length; index++) {
      const nextValue = array[index];

      if (order === 'asc' && leastValue > nextValue) {
        targetIndex = index;
        leastValue = nextValue;
      }
      if (order === 'desc' && leastValue < nextValue) {
        targetIndex = index;
        leastValue = nextValue;
      }
    }

    if (idx === targetIndex) {
      console.log('변경할 필요 없음 (변경 진행 안함)');
    } else {
      array[targetIndex] = value;
      array[idx] = leastValue;
      console.log(`${idx + 1} 번째`);
      console.log(`변경 위치 : ${targetIndex} / 변경되는 값 : ${leastValue}`);
      console.log(`변경 후 : ${JSON.stringify(array)}`);
    }
  }

  return array;
}

const data = new Array(10) // 10개의 값을 가진 배열
  .fill(null)
  .map((v) => parseInt(Math.random() * 9) + 1); // 1~9까지의 random 숫자 생성

console.log(`초기 배열 : ${JSON.stringify(data)}`);

const ascResult = selectionSort(JSON.stringify(data), 'asc');
const descResult = selectionSort(JSON.stringify(data), 'desc');

console.log(`내림차순 최종값 : ${JSON.stringify(ascResult)}`);
console.log(`오름차순 최종값 : ${JSON.stringify(descResult)}`);
