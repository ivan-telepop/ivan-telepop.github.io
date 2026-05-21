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
            src: "/pics/IMG_0001.png",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/photos/pic1.jpg",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },
          {
            src: "/pics/IMG_0002.png",
            alt: "code",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0003.png",
            alt: "Leto",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0004.png",
            alt: "Graph",
            href: "https://github.com/ivanIStereotekk",
          },
          
          {
            src: "/pics/IMG_0005.png",
            alt: "Tbilisi",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0006.png",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_0007.png",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_1.JPG",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_2.JPG",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/pics/IMG_3.JPG",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/pics/IMG_1.JPG", alt: "Posing" },
          { src: "/pics/IMG_2.JPG", alt: "Tree" },
          { src: "/pics/IMG_0001.png", alt: "Studio" },
          { src: "/pics/IMG_0002.png", alt: "Ivan" },
          { src: "/pics/IMG_0003.png", alt: "Ableton" },
          { src: "/pics/IMG_0004.png", alt: "VS-Code" },
          { src: "/pics/IMG_0005.png", alt: "Plane" },
          { src: "/pics/IMG_0006.png", alt: "null" },
          { src: "/pics/IMG_0007.png", alt: "Plane" },
          { src: "/pics/IMG_3.JPG", alt: "Plane" },
          { src: "/pics/IMG_1.JPG", alt: "Posing" },
          { src: "/pics/IMG_2.JPG", alt: "Tree" },
          { src: "/pics/IMG_0001.png", alt: "Studio" },
          { src: "/pics/IMG_0002.png", alt: "Ivan" },
          { src: "/pics/IMG_0003.png", alt: "Ableton" },
          { src: "/pics/IMG_0004.png", alt: "VS-Code" },
          { src: "/pics/IMG_0005.png", alt: "Plane" },
          { src: "/pics/IMG_0006.png", alt: "null" },
          { src: "/pics/IMG_0007.png", alt: "Plane" },
          { src: "/pics/IMG_3.JPG", alt: "Plane" },
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
