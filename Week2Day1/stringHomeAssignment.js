
function lengthOfLastWord(s){

    let word = s.split(" ")
    let lastWord= word[word.length-1]
    return lastWord.length
}
function lengthOfLastWordwithTrim(st){

    let words = st.trim().split(" ")
    let lastWordwithTrim= words[words.length-1]
    return lastWordwithTrim.length
}
function isAnagram(str1,str2){
    const cleanStr = str => str.replace(/[^\w]/g, '').toLowerCase();

    const formatStr1 = cleanStr(str1).split('').sort().join('');
    const formatStr2 = cleanStr(str2).split('').sort().join('');
    return formatStr1 === formatStr2;


}
console.log("Length of last word using split : ", lengthOfLastWord("Hello World"))
console.log("Length of last word using split and trim : ", lengthOfLastWordwithTrim("   fly me   to   the moon  "))

console.log("Given string is an anagram :  ", isAnagram('listen', 'silent'));
console.log("Given string is not an anagram :  ", isAnagram('hello', 'world'));