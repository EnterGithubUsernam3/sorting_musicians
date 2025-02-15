let BubbleSort = require('./services/sorting/bubble_sort');
let QuickSort = require('./services/sorting/quick_sort');
let BucketSort = require('./services/sorting/bucket_sort');
let { Positions, Musician, AttributeMetaData } = require('./models/musician');
let { generateRandomMusicians, randomNameGenerator } = require('./services/random_data');

// a few == 5
// some == 1000
// too much == 100000

let n = 5;
let musicians = generateRandomMusicians(n);

musicians.forEach(mus => {
    console.log(mus.toString());
});

let sort_order = 'DESC';
// years_of_experience
// position
// no_of_concerts

let attribute = 'years_of_experience';


// let attribute = 'no_of_concerts';

// let bubbleSort = new BubbleSort(musicians, sort_order, attribute);
// bubbleSort.printResults();

// let quickSort = new QuickSort(musicians, sort_order, attribute);
// quickSort.printResults();

let bucketSort = new BucketSort(musicians, sort_order, attribute);
bucketSort.printResults();
