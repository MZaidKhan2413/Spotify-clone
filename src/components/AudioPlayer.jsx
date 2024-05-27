import { useRef, useState, useEffect } from 'react';
import { MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled } from "react-icons/md";
import Slider from '@mui/material/Slider';
import '../assets/css/AudioPlayer.css';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const seekTime = (event.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleOnPlay = ()=>{
    !isPlaying && setIsPlaying(!isPlaying)
  }

  return (
    <div className="audio-player d-flex align-items-center gap-2">
      <audio ref={audioRef} src={src} autoPlay onPlay={handleOnPlay}></audio>
      <button className='play_pause' onClick={handlePlayPause}>
        {isPlaying ? <MdOutlinePauseCircleFilled className="fs-1 me-2" /> :
            <MdOutlinePlayCircleFilled className="fs-1 me-2" />}
      </button>
      <Slider
        type="range"
        size="small"
        defaultValue={0}
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />
      <span className="ms-2">{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
    </div>
  );
};

export default AudioPlayer;
