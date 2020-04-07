// console.log("Hello World")

// WHITE BOARD QUESTIONS

// Given an array [1, 2, 3, 1, 4, 5], write a function in JavaScript to create a new array with only the unique numbers.

    // const distinct = (value, index, self) => {
    //     return self.indexOf(value) === index;
    // }

    // arrayOfNums = [1, 2, 3, 1, 4, 5];

    // const distinctNums = arrayOfNums.filter(distinct)

    // console.log(distinctNums)

// TECHNICAL QUESTIONS

// Name the JSON commands that are equivalent to the CRUD functions.

    // CREATE = POST
    // READ = GET
    // UPDATE = PUT
    // DESTROY = DELETE

// PUZZLE / LOGIC QUESTIONS

// There’s 10 weights that are all 5 pounds each, except one which weighs 5.1 pounds. You have a counter balance scale which you can only use 3 times, find which weight weighs 5.1 pounds.

    // 1. Put the 10 weights on each side of the scale: 25 lbs / 25.1 lbs

    // 2. Take the 5 weights on the 25.1 lb side and split them 3/2: The possibilities are either a 15 lbs/10.1 lbs ratio OR 15.1 lbs/10 lbs

    // 3. Take either the 3 weights weighing 15.1 lbs OR the 2 weights weighing 10.1 lbs and split again (If you have only 2 you will immediately know the answer). If you still have 3 weights, only weigh 2 of them anyway. This is because one of them will either be the 5.1 lb weight, OR they will weigh exactly the same, which will reveal that the one you aren't weighing is the 5.1!

