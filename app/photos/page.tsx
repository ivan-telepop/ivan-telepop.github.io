import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Random shots</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/pics/plane.jpg",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/pics/ableton.png",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },          
          {
            src: "/pics/tree.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/studio.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/vs-code.png",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/fastapi.jpg",
            alt: "workspace",
            href: "https://github.com/ivanIStereotekk",
          },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/pics/fastapi.jpg", alt: "Posing" },
          { src: "/pics/ableton.png",alt: "Ivan" },
          { src: "/pics/vs-code.png", alt: "VS-Code" },
          { src: "/pics/glasses.jpg", alt: "Tree" },
          { src: "/pics/fastapi.jpg", alt: "Studio" },
          { src: "/pics/plane.jpg", alt: "Ableton" },
          { src: "/pics/studio.jpg", alt: "VS-Code" },
          { src: "/pics/tree.png", alt: "Plane" },
          { src: "/pics/vs-code.png", alt: "null" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/fastapi.jpg", alt: "***" },
          { src: "/photos/ableton.png", alt: "me" },
          { src: "/photos/vs-code.png", alt: "eq" },
          { src: "/photos/studio.jpg", alt: "Plane" },
          { src: "/photos/tree.png", alt: "Tree" },
        ]}
      />
    </section>
  );
}
