import wordBank from './bancoPalabras.txt'

export const boardDefault=[['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','','']]; 

export const generateWord = async ()=>{
    let wordSet;
    let todayWord;
       
    await fetch(wordBank).then((response)=>response.text().then((result)=>{
        let wordArr= result.toLowerCase().split(' ');
        //let newarr=wordArr.filter((word)=>word!=='')English version
        todayWord=wordArr[Math.floor(Math.random()*wordArr.length)];
        wordSet=new Set(wordArr);
    }))
    return {wordSet,todayWord}
}