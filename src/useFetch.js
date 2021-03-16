import {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // const abortCont = new AbortController();

        // my way with my json file
        // const fetchData = async (url) => {

        //     try {
        //         const response = await fetch(url, { signal: abortCont.signal });
        //         const data = await response.json();
        //         let dataResponse = data.blogs;

        //         setData(dataResponse);
                
        //         // to hide loading msg
        //         setIsPending(false);
                
        //         // error
        //         setError(null);
                
        //     } catch(err) {

        //         if(err.name === "AbortError") {
        //             console.log("fetch aborted")
        //         } else {
        //             // auto catches network / connection error
        //             setIsPending(false);
        //             setError(err.message);
        //             // catches errors both in fetch and response.json
        //             // console.log(err);
        //         }

        //     }

        // };
        
        // fetchData(url, { 
        //     signal: abortCont.signal       
        // });

        // second way tutorial way
        // json-server --watch data/db.json --port 8000
        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, { signal: abortCont.signal })
                .then( response => {
                    if(!response.ok) {
                        throw Error("Could not fetch the data for that resource");
                    }
                    return response.json();
                })
                .then(dataResponse => {
                    // to hide loading msg
                    setIsPending(false);

                    setData(dataResponse);
    
                    // error
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                    // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })

        }, 1000);

        // abort the fetch
        // return () => console.log("cleanup");
        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error}

}

export default useFetch;