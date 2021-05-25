// Insertion sort 
// space complexity - O(1) - in place algorithm
// time complexity - Worst O(n^2)

function insertionSort(arr) {
    const len = arr.length;
    for (let index = 1; index < len; index++ ) {
        let key = arr[index];
        let currentIndex = index-1;
        while(currentIndex >= 0 && arr[currentIndex] > key) {
            arr[currentIndex + 1] = arr[currentIndex];
            currentIndex = currentIndex - 1;
        }
        arr[currentIndex + 1] = key;
    }
    return arr;
}

const testInput = [
    [9, 5, 4, 7, 2, 0, 6],
    [10, 2, 14, 9, 61, 7, 7, 8 , 0, 88]
];

function testExec(testInput) {
    const len = testInput.length;
    for (let index = 0; index < len; index++ ) {
        let input = testInput[index] + '';
        let result = insertionSort(testInput[index]);
        console.log(`input : ${input} output: ${result}`);
    }
}

testExec(testInput);
