import Image, { type StaticImageData } from "next/image";

type PhoneFrameProps = {
  src: StaticImageData;
  alt: string;
  /** Show only the top of the phone, as a share of its height (e.g. 0.62). */
  crop?: number;
  priority?: boolean;
  className?: string;
};

/**
 * A real screenshot from the app inside a plain iPhone outline. The
 * screenshots already include the status bar and Dynamic Island, so the
 * frame is only the bezel and rounded screen.
 */
export default function PhoneFrame({ src, alt, crop, priority = false, className = "" }: PhoneFrameProps) {
  const phone = (
    <div className="rounded-[46px] bg-[#111214] p-[7px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.28),0_12px_24px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
      <div className="overflow-hidden rounded-[39px] bg-[#f9f8f4]">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          sizes="(max-width: 768px) 70vw, 330px"
          className="block w-full h-auto select-none"
          draggable={false}
        />
      </div>
    </div>
  );
  if (!crop) return <div className={className}>{phone}</div>;
  // The phone is ~2.17 times taller than wide; show the top `crop` of it.
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: `1 / ${(2.173 * crop).toFixed(3)}`,
        // Fade the cut-off bottom into whatever is behind it.
        maskImage: "linear-gradient(to bottom, black 78%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent)",
      }}
    >
      {phone}
    </div>
  );
}
