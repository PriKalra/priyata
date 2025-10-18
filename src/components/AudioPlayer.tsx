import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
}

const AudioPlayer = ({ audioUrl, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  return (
    <div className="mt-4 space-y-3">
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        onEnded={() => setIsPlaying(false)} 
      />
      
      {/* Progress Bar */}
      <div 
        className="w-full h-1.5 bg-muted rounded-full cursor-pointer overflow-hidden"
        onClick={handleSeek}
      >
        <div 
          className="h-full bg-foreground transition-all duration-100"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      {/* Time Display */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Play Button */}
      <Button
        onClick={togglePlay}
        size="sm"
        className="w-full"
      >
        {isPlaying ? (
          <>
            <Pause className="h-3.5 w-3.5 mr-2" />
            Pause
          </>
        ) : (
          <>
            <Play className="h-3.5 w-3.5 mr-2" />
            Play Audio
          </>
        )}
      </Button>
    </div>
  );
};

export default AudioPlayer;
