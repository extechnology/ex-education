import React from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image"; 

interface YouTubeCardProps {
  videoId: string;
  thumbnail: string;
  isPlaying: boolean;
  setActiveVideoId: (videoId: string | null) => void;
}

const YouTubeCard: React.FC<YouTubeCardProps> = ({
  videoId,
  thumbnail,
  isPlaying,
  setActiveVideoId,
}) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handlePlay = () => {
    setActiveVideoId(isPlaying ? null : videoId);
  };

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      {isPlaying ? (
        <ReactPlayer
          url={videoUrl}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        />
      ) : (
        <div className="relative cursor-pointer" onClick={handlePlay}>
          <Image
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur w-16 h-16 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeCard;
