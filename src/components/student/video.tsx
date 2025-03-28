// import React from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// interface VideoJSProps {
//   options: videojs.;
//   onReady?: (player: videojs.Player) => void;
// }

// export const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
//   const videoRef = React.useRef<HTMLDivElement>(null);
//   const playerRef = React.useRef<videojs.Player | null>(null);

//   React.useEffect(() => {
//     if (!playerRef.current && videoRef.current) {
//       const videoElement = document.createElement("video-js");
//       videoElement.classList.add("vjs-big-play-centered", "vjs-matrix");
//       videoRef.current.appendChild(videoElement);

//       const player = (playerRef.current = videojs(
//         videoElement,
//         {
//           ...options,
//           controlBar: {
//             children: [
//               "playToggle",
//               "volumePanel",
//               "currentTimeDisplay",
//               "timeDivider",
//               "durationDisplay",
//               "progressControl",
//               "remainingTimeDisplay",
//               "customControlSpacer",
//               "playbackRateMenuButton",
//               "qualitySelector",
//               "fullscreenToggle",
//             ],
//           },
//         },
//         () => {
//           videojs.log("player is ready");
//           onReady?.(player);
//         },
//       ));

//       // Add custom class for styling
//       player.addClass("vjs-custom-theme");
//     } else if (playerRef.current) {
//       const player = playerRef.current;
//       player.autoplay(options.autoplay);
//       player.src(options.sources);
//     }
//   }, [options, onReady]);

//   React.useEffect(() => {
//     const player = playerRef.current;
//     return () => {
//       if (player && !player.isDisposed()) {
//         player.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div data-vjs-player>
//       <div ref={videoRef} />
//     </div>
//   );
// };
"use client";

import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Player from "video.js/dist/types/player";

interface VideoJSProps {
  options: any;
  onReady?: (player: Player) => void;
}

const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const player = (playerRef.current = videojs(
        videoRef.current,
        options,
        () => {
          videojs.log("Player is ready");
          onReady?.(player);
        },
      ));

      player.addClass("vjs-custom-theme");
    }
  }, [options, onReady]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="relative">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-matrix"
      />
    </div>
  );
};

export default VideoJS;
