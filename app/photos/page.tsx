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
            href: "https://github.com/ivan-telepop",
          },
          {
            src: "/pics/ableton.png",
            alt: "Ableton",
            href: "https://github.com/ivan-telepop",
          },          
          {
            src: "/pics/tree.png",
            alt: "Yellow Tree",
            href: "https://github.com/ivan-telepop",
          },
          {
            src: "/pics/studio.jpg",
            alt: "Ableton Live",
            href: "https://github.com/ivan-telepop",
          },
          {
            src: "/pics/vs-code.png",
            alt: "Yellow Tree",
            href: "https://github.com/ivan-telepop",
          },
          {
            src: "/pics/fastapi.png",
            alt: "Fastapi workspace",
            href: "https://github.com/ivan-telepop",
          },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/pics/fastapi.jpg", alt: "FastAPI" },
          { src: "/pics/ableton.png",alt: "Ableton Live" },
          { src: "/pics/vs-code.png", alt: "VS-Code" },
          { src: "/pics/plane.jpg", alt: "Plane" },
          { src: "/pics/fastapi.jpg", alt: "Studio" },
          { src: "/pics/plane.jpg", alt: "Ableton" },
          { src: "/pics/studio.jpg", alt: "VS-Code" },
          { src: "/pics/tree.png", alt: "Plane" },
          { src: "/pics/vs-code.png", alt: "VS-code" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/pics/fastapi.jpg", alt: "workspace" },
          { src: "/pics/ableton.png", alt: "me" },
          { src: "/pics/vs-code.png", alt: "eq" },
          { src: "/pics/studio.jpg", alt: "Plane" },
          { src: "/pics/tree.png", alt: "Tree" },
          { src: "/pics/hunter-cv.png", alt: "The Man" },
        ]}
      />
    </section>
  );
}
