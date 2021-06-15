
import {useState,useEffect} from 'react';
const useFetch= (url) =>{
    const [data,setData]=useState(null);
    const[load,setLoad]=useState(true);
    const[error,setError]=useState(null);
    useEffect(()=>{
        const abort=new AbortController();
        fetch(url,{signal:abort.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("couldnt fetch the database")
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setLoad(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name=== 'AbortError'){
                    console.log('aborted');
                }else{
                    setLoad(false);
                    setError(err.message);
                }
                
                
            })
        return()=> abort.abort();
    }, [url]);
    return {data,load,error}
}
export default useFetch;