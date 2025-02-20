import React from "react";

interface VideoProps {
  src: string; // Video source URL
  alt?: string; // Alt text for accessibility (optional)
  width?: number; // Default width
  height?: number; // Default height
  className?: string; // Additional CSS classes
}

export const Video: React.FC<VideoProps> = ({
  src,
  alt = "Video",
  width = 92,
  height = 92,
  className = "",
}) => {
  return (
    <video
      width={width}
      height={height}
      className={`mx-auto object-cover ${className}`}
      aria-label={alt} // For accessibility
      controls // Add video controls (play, pause, volume, etc.)
      muted // Mute the video by default
      loop // Loop the video
      playsInline // Ensure the video plays inline on mobile devices
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
