import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const datas = await res.json();
            setData(datas);
        }
        fetchData();
    }, [url])

    return {data}
}

export default useFetch;