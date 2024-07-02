// O(n^2)

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        console.log("Current Value:", currentVal);

        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;

        console.log("Array after inserting", currentVal, ":", arr);
    }

    return arr; 
}

console.log(insertionSort([2, 1, 3, 4, 9, 7, 8]));