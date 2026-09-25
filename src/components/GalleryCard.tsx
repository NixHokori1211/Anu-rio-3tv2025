import { GalleryItem } from "@/lib/types";
import { PhotoFrame } from "@/components/PhotoFrame";

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative overflow-hidden rounded-sm border border-line">
      <PhotoFrame seed={item.id} label={item.caption} className="aspect-square w-full" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-3 pb-2.5 pt-10">
        <p className="text-sm text-ink">{item.caption}</p>
      </figcaption>
    </figure>
  );
}
