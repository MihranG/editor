import {synonymsApiServiceURL} from './constants'

export const callToGetSynonyms = (word)=>{
    const idealConditionForSingleWordFetch = 
        word.length>0 &&
        !word.split(' ')[1] &&
        word.indexOf('.')=== -1 &&
        word.indexOf(',')=== -1 
    console.log(8888, word, idealConditionForSingleWordFetch)
    if(idealConditionForSingleWordFetch){
        return fetch(`https://api.datamuse.com/words?ml=${word}`)
            .then(data=>data.json())
            .catch(e=>console.error(e))
    }else{
        return Promise.resolve([]);
    }
}