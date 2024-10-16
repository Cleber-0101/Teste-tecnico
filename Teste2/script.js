const inputString = "Na bandeira nacional esta escrito ordem e progresso!";

function countLetterA(str) {
    const lowerCaseString = str.toLowerCase();
    
    const matches = lowerCaseString.match(/a/g);
    
    return matches ? matches.length : 0;
}

const count = countLetterA(inputString);

console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
