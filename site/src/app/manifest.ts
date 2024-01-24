import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Resume",
    name: "Brian Gebel | Resume",
    description: "Brian Gebel - Software Engineering, Manager",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32 24x24 16x16",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "32x32 24x24 16x16",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon-144-precomposed.png",
        type: "image/png",
        sizes: "144x144",
      },
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
  };
}
