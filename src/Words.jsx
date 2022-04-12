import wordBank from './bancWords.txt'
export const boardDefault=[['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','',''],
                           ['','','','','']]

export const generateWord = async ()=>{
    let wordSet;
    let todayWord;
    await fetch(wordBank).then((response)=>response.text().then((result)=>{
        let wordArr= result.split(/[(\r \n)]/);
        let newarr=wordArr.filter((word)=>word!=='')
        todayWord=newarr[Math.floor(Math.random()*newarr.length)];
        wordSet=new Set(newarr);
    }))
    return {wordSet,todayWord}
}