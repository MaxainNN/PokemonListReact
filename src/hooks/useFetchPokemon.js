import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemon = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                console.log(response);
                setData(response.data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error }
};

export default useFetchPokemon;