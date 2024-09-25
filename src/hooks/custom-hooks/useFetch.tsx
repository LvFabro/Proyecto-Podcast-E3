import { useState, useEffect } from 'react'

const API_URL = 'https://api.audioboom.com/audio_clips';

export type DataProp = {
    id: number,
    title: string,
    description: string,
    channel: {
        urls: {
            logo_image: {
                original: string;
            };
        };
    };
    urls: {
        high_mp3: string;
    }
}

function useFetch() {
    const [info, setInfo] = useState<Array<DataProp>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setInfo(data.body.audio_clips))
            .catch(() => {setError('Ha ocurrido un error en la carga :(')})
            .finally(() => {setLoading(false)});
}, [])

    return { info, loading, error }
}



export default useFetch;