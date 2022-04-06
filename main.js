let BubbleSort = require('./services/sorting/bubble_sort');
let QuickSort = require('./services/sorting/quick_sort');
let BucketSort = require('./services/sorting/bucket_sort');
let { Positions, Musician, AttributeMetaData } = require('./models/musician');
let { generateRandomMusicians, randomNameGenerator } = require('./services/random_data');

<<<<<<< HEAD
// function sortByIndex(array) {
//     let result = [];
//     result = array.sort((a, b) => {
//         return(a.index - b.index);
//     });
//     return(result);
// }

// let sortedPositions = sortByIndex(Positions);
// console.log(sortedPositions);

<<<<<<< HEAD
let musicians = generateRandomMusicians(5);


musicians.forEach(mus => {
    console.log(mus.toString());
})
let sort_order = 'DESC';
=======
// a few == 5
// some == 1000
// too much == 100000
=======
>>>>>>> c954f48ff51d93265c7af3cc9375886f3431ea7d
let n = 5;
let musicians = generateRandomMusicians(n);

musicians.forEach(mus => {
    console.log(mus.toString());
});

let sort_order = 'DESC';
// years_of_experience
// position
// no_of_concerts
<<<<<<< HEAD
>>>>>>> 672ce4baf0991f834fc660a5961a9312c06a6dd9
let attribute = 'years_of_experience';

=======
let attribute = 'no_of_concerts';
>>>>>>> c954f48ff51d93265c7af3cc9375886f3431ea7d
let bubbleSort = new BubbleSort(musicians, sort_order, attribute);
bubbleSort.printResults();

let quickSort = new QuickSort(musicians, sort_order, attribute);
quickSort.printResults();

let bucketSort = new BucketSort(musicians, sort_order, attribute);
bucketSort.printResults();
