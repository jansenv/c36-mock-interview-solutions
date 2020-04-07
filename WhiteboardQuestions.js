// 1
// Given an array [1, 2, 3, 1, 4, 5], write a function in JavaScript to create a new array with only the unique numbers.

    // const distinct = (value, index, self) => {
    //     return self.indexOf(value) === index;
    // }

    // let arrayOfNums = [1, 2, 3, 1, 4, 5];

    // const distinctNums = arrayOfNums.filter(distinct)

    // console.log(distinctNums)

// 2
// Given a list of numbers, extract the number that is the highest from the list. 

    // let arrayOfNums = [1, 2, 4, 8, 16, 32, 64, 128]

    // let maxNum = Math.max(...arrayOfNums);

    // console.log(maxNum)

//What if you wanted the highest number and the second highest number?

    // arrayOfNums.splice(arrayOfNums.indexOf(maxNum), 1);

    // let maxNum2 = Math.max(...arrayOfNums);

    // console.log(maxNum2);