import React from "react";

interface HomeBannerProps {
  children: React.ReactNode;
}

export default function HomeBanner({ children }: HomeBannerProps) {
  return (
    <div className="w-screen h-1/2 text-white bg-home-game bg-cover bg-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-950 before:pointer-events-none">
      {children}
    </div>
  );
}
