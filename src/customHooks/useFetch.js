import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal:abortCont.signal})
            .then(res => {
                if(res.ok === false){
                    
                    throw Error("There is an error with the request!!!");
                }
                return res.json()
            })
            .then((data)=>{
                //console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            }).catch((e) => {
                // console.log("This is err");
                // console.log(e);
                if(e.name === "AbortError"){
                    console.log("Abort error");
                }
                else{
                    setData(null);
                    setIsPending(false);
                    setError(e.message);
                }
            });
        }, 1000);
        return () => {
            return abortCont.abort();
        }
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;