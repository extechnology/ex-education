'use client'
import React, { useState } from "react";
import YouTubeCard from "./YoutubeCard";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    thumbnail:
      "https://img.freepik.com/free-vector/modern-youtube-background-thumbnail-with-papercut-effect_1361-2739.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    id: "L_jWHffIx5E",
    thumbnail:
      "https://img.freepik.com/premium-psd/attractive-new-youtube-thumbnail-design-template_941802-3550.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    id: "kJQP7kiw5Fk",
    thumbnail:
      "https://img.freepik.com/premium-psd/youtube-video-thumbnail-design-background-business-video_1101917-4150.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
  {
    id: "9bZkp7q19f0",
    thumbnail:
      "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
  },
];

const VideoGrid: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto py-10 md:py-20 px-5 md:px-0">
      {videos.map((video) => (
        <YouTubeCard
          key={video.id}
          videoId={video.id}
          thumbnail={video.thumbnail}
          isPlaying={activeVideoId === video.id}
          setActiveVideoId={setActiveVideoId}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
