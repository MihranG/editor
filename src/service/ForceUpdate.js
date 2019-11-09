import {useState} from 'react';

export function useForceUpdate(){
    const [useLessValue, setUseLessValue] = useState(true);
    return () => setUseLessValue(!useLessValue); 
}
