import { gallery } from "@/data/gallery";
import { GalleryItem } from "@/lib/types";
import { PageContainer } from "@/components/PageContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryCard } from "@/components/GalleryCard";

const TAG_ORDER: GalleryItem["tag"][] = ["turma", "eventos", "aulas", "bastidores"];
const TAG_LABEL: Record<GalleryItem["tag"], string> = {
  turma: "Turma",
  eventos: "Eventos",
  aulas: "Aulas",
  bastidores: "Bastidores",
};

export default function GaleriaPage() {
  const byTag = TAG_ORDER.map((tag) => ({
    tag,
    items: gallery.filter((item) => item.tag === tag),
  })).filter((group) => group.items.length > 0);

  return (
    <PageContainer>
      <SectionHeader
        kicker="Galeria"
        title="Registro visual"
        description="Fotos soltas de três anos de turma — sem legenda longa, só imagem."
      />

      <div className="flex flex-col gap-12">
        {byTag.map((group) => (
          <section key={group.tag} aria-labelledby={`tag-${group.tag}`}>
            <h2 id={`tag-${group.tag}`} className="mb-4 font-mono text-sm text-gold-dim">
              {TAG_LABEL[group.tag]}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {group.items.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
