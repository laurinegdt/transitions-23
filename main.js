import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
    "sketches/example-sequence-empty",
    "sketches/example-sequence-empty",
]

const exampleSequence = [
    "sketches/laurine-day1",
    "sketches/laurine-day2",
    "sketches/laurine-day3",
    "sketches/laurine-day4",

]

runSequence(exampleSequence)