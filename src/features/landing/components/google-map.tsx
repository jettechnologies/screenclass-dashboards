"use client";

import React from "react";
import Link from "next/link";

interface GoogleMapsLinkProps {
  address: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  showText?: boolean;
  target?: "_blank" | "_self";
  mapType?: "search" | "dir";
  origin?: string;
  travelMode?: "driving" | "walking" | "bicycling" | "transit";
  ariaLabel?: string;
}

export const GoogleMapsLink = ({
  address,
  children,
  className = "",
  icon,
  showText = true,
  target = "_blank",
  mapType = "search",
  origin,
  travelMode = "driving",
  ariaLabel,
}: GoogleMapsLinkProps) => {
  const encodedAddress = encodeURIComponent(address);

  // Generate the appropriate URL based on props
  const generateMapsUrl = () => {
    if (mapType === "dir") {
      const params = new URLSearchParams({
        api: "1",
        destination: encodedAddress,
        travelmode: travelMode,
      });
      if (origin) params.append("origin", encodeURIComponent(origin));
      return `https://www.google.com/maps/dir/?${params.toString()}`;
    }

    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const mapsUrl = generateMapsUrl();
  const defaultText = mapType === "dir" ? "Get Directions" : "View on Map";
  const linkText = children || (showText ? defaultText : "");
  const label =
    ariaLabel ||
    `${mapType === "dir" ? "Get directions to" : "View"} ${address}`;

  // Client-side only mobile detection
  // const [isMobile, setIsMobile] = React.useState(false);
  // React.useEffect(() => {
  //   setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  // }, []);

  // Use Next.js Link for internal navigation, but we need a regular <a> for external links
  return (
    <Link href={mapsUrl} passHref legacyBehavior>
      <a
        href={mapsUrl} // Still needed for legacyBehavior
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`google-maps-link ${className}`}
        aria-label={label}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement<HTMLSpanElement>, {
            className: "map-icon",
          })}

        {linkText}
      </a>
    </Link>
  );
};

// CSS can be moved to your global CSS or CSS Modules
