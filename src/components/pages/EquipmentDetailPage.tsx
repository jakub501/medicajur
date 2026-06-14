import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { href, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { EquipmentItem } from "@/lib/equipment";
import { Section } from "@/components/ui/Section";

function getDetailImages(detail: NonNullable<EquipmentItem["detail"]>) {
  if (detail.images?.length) return detail.images;
  if (detail.image) {
    return [{ src: detail.image, alt: detail.imageAlt ?? "" }];
  }
  return [];
}

export function EquipmentDetailPage({
  locale,
  dict,
  item,
}: {
  locale: Locale;
  dict: Dictionary;
  item: EquipmentItem & { slug: string; detail: NonNullable<EquipmentItem["detail"]> };
}) {
  const e = dict.services.equipment;
  const detail = item.detail;
  const images = getDetailImages(detail);
  const title = detail.pageTitle ?? item.device;
  const purpose = detail.pagePurpose ?? item.purpose;

  return (
    <Section className="py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href={href(locale, "services", "equipment")}
          className="inline-flex min-h-11 items-center gap-2 text-body-sm font-semibold text-primary transition-colors hover:text-primary-deep"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          {e.backToList}
        </Link>

        <div className="mt-6">
          <p className="text-eyebrow text-primary">{purpose}</p>
          <h1 className="text-h2 mt-2 text-balance">{title}</h1>
          <span
            className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-brand-green"
            aria-hidden="true"
          />
        </div>

        <div
          className={
            images.length > 1
              ? "mt-6 grid gap-4 sm:grid-cols-2"
              : "card mt-6 overflow-hidden p-4 sm:p-5"
          }
        >
          {images.map((image) => (
            <div
              key={image.src}
              className={
                images.length > 1
                  ? "card overflow-hidden p-4 sm:p-5"
                  : "relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-xl bg-bg"
              }
            >
              <div
                className={
                  images.length > 1
                    ? "relative aspect-[4/3] overflow-hidden rounded-xl bg-bg"
                    : "relative h-full w-full"
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-4"
                  sizes={
                    images.length > 1
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 576px"
                  }
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {detail.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
