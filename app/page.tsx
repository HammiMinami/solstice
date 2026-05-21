import { CollectionItem, Collections } from "@/src/component/Collections/Collections";
import { Gallery, GalleryImage } from "@/src/component/Gallery/Gallery";
import { VideoBanner } from "@/src/component/VideoBanner/VideoBanner";
import collectionsData from '../src/data/collectionsData.json';
import Footer from "@/src/component/Footer/Footer";
import galleryImageData from '../src/data/galleryImageData.json';
import Hero from "@/src/component/Hero/Hero";

export default function Page() {
  const collections = collectionsData as CollectionItem[];
  const galleryImages = galleryImageData as GalleryImage[];

  return (
    <>
      <main>
        <Hero />
        <Collections collections={collections} />
        <VideoBanner
          videoUrl="https://www.youtube.com/embed/k2tt-oMTAJI?autoplay=1&start=0"
          backgroundImage="/asset/video.png"
          ariaLabel="Play community introductory video"
        />
        <Gallery images={galleryImages} />
      </main>
      <Footer />
    </>
  );
}
