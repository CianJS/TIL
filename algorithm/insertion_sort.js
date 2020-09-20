function insertionSort(array, order) {
  array = JSON.parse(array);

  for (let mainIndex = 1; mainIndex < array.length; mainIndex++) {
    const targetValue = array[mainIndex];

    let prevIndex = mainIndex - 1;
    console.log(`${mainIndex} 번째`);
    if (order === 'asc' && array[prevIndex] > targetValue) {
      for (let index = prevIndex; index >= 0; index--) {
        const prevValue = array[index];
        if (targetValue >= prevValue) {
          break;
        }

        array[index + 1] = prevValue;
        prevIndex = index;
        console.log(
          `${index} 위치의 값 뒤로 한 칸 이동 : ${JSON.stringify(
            array
          )} / key 값 : ${targetValue}`
        );
      }
      array[prevIndex] = targetValue;
      console.log(`${mainIndex} 번째 최종 값 : ${JSON.stringify(array)}`);
    }

    if (order === 'desc' && array[prevIndex] < targetValue) {
      for (let index = prevIndex; index >= 0; index--) {
        const prevValue = array[index];
        if (targetValue < prevValue) {
          break;
        }

        array[index + 1] = prevValue;
        prevIndex = index;
      }
      array[prevIndex] = targetValue;
      console.log(`${JSON.stringify(array)}`);
    }
  }

  return array;
}

const data = new Array(10)
  .fill(null)
  .map((v) => parseInt(Math.random() * 9) + 1);

const stringData = JSON.stringify(data);
console.log(`초기 배열 : ${stringData}`);

const ascResult = insertionSort(stringData, 'asc');
const descResult = insertionSort(stringData, 'desc');

console.log(`내림차순 최종값 : ${JSON.stringify(ascResult)}`);
console.log(`오름차순 최종값 : ${JSON.stringify(descResult)}`);
