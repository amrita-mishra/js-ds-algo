function partition(arr, startIndex, endIndex) {
    // Store the last elem as the pivot value
    const pivotValue = arr[endIndex];
    let pivotIndex = startIndex; 
    for (let rightBoundary = startIndex; rightBoundary < endIndex; rightBoundary++) {
        if (arr[rightBoundary] < pivotValue) {
        // Swap elements and move the index to  the next elem
        [arr[rightBoundary], arr[pivotIndex]] = [arr[pivotIndex], arr[rightBoundary]];
        pivotIndex++;
        }
    }
    
    // Place the pivot value in the current pivot index. This brings the element in it correct position in the sorted array
    [arr[pivotIndex], arr[endIndex]] = [arr[endIndex], arr[pivotIndex]] 
    return pivotIndex;
}

function quickSort(arr, startIndex, endIndex) {
    
    if(startIndex < endIndex) {
        pivot = partition(arr, startIndex, endIndex);
        quickSort(arr, startIndex , pivot-1);
        quickSort(arr, pivot+1, endIndex);
    }
    return arr;
}

const testInput = [
    [9, 5, 4, 7, 2, 0, 6],
    [10, 2, 14, 9, 61, 7, 7, 8 , 0, 88],
    [13,19,9,5,12,8,7,4,21,2,6,11],
    [5,7,6,1,3,2,4]
];

function testExec(testInput) {
    testInput.forEach(input => {
        const result = quickSort(input, 0, input.length - 1);
        console.log(result);
    })
}

testExec(testInput);