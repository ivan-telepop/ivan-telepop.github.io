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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/pics/IMG_0006.JPG",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/photos/pic1.jpg",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },
          {
            src: "/pics/IMG_0027.jpg",
            alt: "code",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0134.jpg",
            alt: "Leto",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0135.jpg",
            alt: "Graph",
            href: "https://github.com/ivanIStereotekk",
          },
          
          {
            src: "/pics/IMG_0142.jpg",
            alt: "Tbilisi",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0143.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0147.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0152.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0153.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0167.jpg",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/pics/IMG_0167.jpg", alt: "Posing" },
          { src: "/pics/IMG_0153.jpg", alt: "Tree" },
          { src: "/pics/IMG_0152.jpg", alt: "Studio" },
          { src: "/pics/IMG_0147.jpg", alt: "Ivan" },
          { src: "/pics/IMG_0143.jpg", alt: "Ableton" },
          { src: "/pics/IMG_0142.jpg", alt: "VS-Code" },
          { src: "/pics/IMG_0135.jpg", alt: "Plane" },
          { src: "/pics/IMG_0134.jpg", alt: "null" },
          { src: "/pics/IMG_0027.jpg", alt: "Plane" },
          { src: "/pics/IMG_0006.JPG", alt: "Plane" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/pic1.jpg", alt: "***" },
          { src: "/photos/ableton.png", alt: "me" },
          { src: "/photos/dog.jpg", alt: "Dog" },
          { src: "/photos/vs-code.png", alt: "eq" },
          { src: "/photos/fl-02.jpg", alt: "Plane" },
          { src: "/photos/tree.png", alt: "Tree" },
        ]}
      />
    </section>
  );
}
