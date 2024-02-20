//  Write a program that counts the number of vowels in a sentence. 

function countVowels(sentence) {
    sentence = sentence.toLowerCase();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {

            vowelCount++;
        }
    }
    
    return vowelCount;
}

let sentence = "My name is salome ";
 sentence = " Today is on a tuesday";
console.log(countVowels(sentence));
