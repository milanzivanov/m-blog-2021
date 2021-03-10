import {useState, useEffect} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        // my way with my json file
        const fetchData = async (url) => {

            try {
                const response = await fetch(url);  
                const data = await response.json();
                let dataResponse = data.blogs;

                setData(dataResponse);
                
                // to hide loading msg
                setIsPending(false);
                
                // error
                setError(null);
                
            } catch(err) {
                setIsPending(false);
                setError(err.message);
                // catches errors both in fetch and response.json
                // console.log(err);
            }
            
        };
        
        fetchData(url);

        // second way tutorial way
        // json-server --watch data/db.json --port 8000
        // fetch(url)
        //     .then( response => {
        //         if(!response.ok) {
        //             throw Error("Could not fetch the data for that resource");
        //         }
        //         return response.json()
        //     })
        //     .then(dataResponse => {
        //         setData(dataResponse);

        //         // to hide loading msg
        //         setIsPending(false);

        //         // error
        //         setError(null);
        //     })
        //     .catch(err => {
        //         // auto catches network / connection error
        //         setIsPending(false);
        //         setError(err.message);
        //     });

    }, [url]);

    return {data, isPending, error}

}

export default useFetch;