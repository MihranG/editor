import {synonymsApiServiceURL} from './constants'

export const callToGetSynonyms = (word)=>{
    const idealConditionForSingleWordFetch = 
        word.length>0 &&
        !word.split(' ')[1] &&
        word.indexOf('.')=== -1 &&
        word.indexOf(',')=== -1 

    if(idealConditionForSingleWordFetch){
        return fetch(`${synonymsApiServiceURL}${word}`)
            .then(data=>data.json())
            .catch(e=>console.error(e))
    }else{
        return Promise.resolve([]);
    }
}