import { useRef, useState } from 'react'
import { CirclePlay, Pause } from 'lucide-react'

type SongProp = {
    audioSrc : string;
}
    

function ReproducirPodcast( props : SongProp) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function handleClick() {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current?.pause()
        } else {
            audioRef.current?.play()
        }
    }

    return (
        <>
            <audio ref={audioRef}>
                <source src={props.audioSrc}/>
            </audio>
            <button onClick={handleClick}>{!isPlaying ? <CirclePlay size={30} color='#ffffff' /> : <Pause color="#ffffff" size={30} />}</button>
        </>
    );

}

export default ReproducirPodcast;