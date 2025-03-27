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
            src: "/photos/dog.jpg",
            alt: "Posing well",
            href: "https://ableton.com",
          },
          {
            src: "/photos/pic1.jpg",
            alt: "Home Studio",
            href: "https://mixcult.bandcamp.com/album/self-object-id-ep",
          },
          {
            src: "/photos/vs-code.png",
            alt: "djing",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/iv-g.png",
            alt: "Leto",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/bf-algo.png",
            alt: "Leto",
            href: "https://github.com/ivanIStereotekk",
          },
          
          {
            src: "/photos/ivan.png",
            alt: "i'm",
            href: "https://github.com/ivanIStereotekk",
          },
          {
            src: "/photos/tree.png",
            alt: "tree",
            href: "https://github.com/ivanIStereotekk",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/dog.jpg", alt: "Posing" },
          { src: "/photos/tree.png", alt: "Tree" },
          { src: "/photos/pic1.jpg", alt: "Studio" },
          { src: "/photos/ivan.png", alt: "Nice Guy" },
          { src: "/photos/ableton.png", alt: "Nice Guy" },
          { src: "/photos/vs-code.png", alt: "Nice Guy" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/pic1.jpg", alt: "Roman columns" },
          { src: "/photos/iv-g.png", alt: "Big Ben" },
          { src: "/photos/dog.jpg", alt: "Dog" },
          { src: "/photos/vs-code.png", alt: "EQ" },
          { src: "/photos/ivan.png", alt: "Glases" },
          { src: "/photos/tree.png", alt: "Tree" },
        ]}
      />
    </section>
  );
}
