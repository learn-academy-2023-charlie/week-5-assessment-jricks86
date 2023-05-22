// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('codedMessage', () => {
    it('returns a string that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
        expect(codedMessage(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(codedMessage(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        expect(codedMessage(secretCodeWord3)).toEqual('3cc3ntr1c')
    })
})

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// FAIL  week-5/week-5-assessment-jricks86/code-challenges.test.js
// ● codedMessage › returns a string that converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//   ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.
// input: string
// output: string where "a" to 4, "e" to 3, "i" to 1, and "o" to 0


const codedMessage = (string) => {
    // use split method to make the string an array
    // use map method to iterate over each element of the array and call the codedMessage function on each element
    return string.split('').map(letter => {
        // use if loop
        // if letter is a the a vowel then return number 
        if (letter === 'a') return 4
        if (letter == 'e') return 3
        if (letter == 'E') return 3
        if (letter === 'i') return 1
        if (letter === 'o') return 0
        if (letter === 'u') return 0
        return letter
        // use join method to return the array to a string
    }).join('')
}

codedMessage(secretCodeWord1)
codedMessage(secretCodeWord2)
codedMessage(secretCodeWord3)


// 2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('containingLetter', () => {
    it('returns an array of all the words containing that particular letter', () => {
        expect(containingLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(containingLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// FAIL  week-5/week-5-assessment-jricks86/code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: containingLetter is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// input: array and letter
// output: array of all the words that contain the letter
const containingLetter = (array, letter) => {
    // create empty array to return
    let returnArray = []
    // loop through array and add all the elements that contain the letter
    array.forEach(element => {
        if (element.toLowerCase().includes(letter.toLowerCase())) returnArray.push(element)
    })
    // return the array
    return returnArray
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe( 'fullHouse', () => {
    it('returns true if the array is a full house', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    } )
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// FAIL  week-5/week-5-assessment-jricks86/code-challenges.test.js
// ● fullHouse › returns true if the array is a full house

//   ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// input: array of 5 numbers
// output: boolean to return if full house is exactly one pair and one three of a kind.

const fullHouse = (array) => {
    // create empty object to hold number of counts of each number
  const counts = {};
//   loop through array and add all the numbers to the counts object
  for (let i = 0; i < array.length; i++) {
    counts[array[i]] = counts[array[i]] ? counts[array[i]] + 1 : 1;
  }
//   new variable to check to see if the number of times a number appears is equal to the number of times a pair appears
  const values = Object.values(counts);
//   if so, return true
  return values.includes(2) && values.includes(3);
};

fullHouse(hand1)
fullHouse(hand2)    
fullHouse(hand3)
fullHouse(hand4)
