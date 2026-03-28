interface ReviewCardProps {
  text: string;
  author: string;
  location: string;
}

export default function ReviewCard({ text, author, location }: ReviewCardProps) {
  return (
    <div className="bg-lightsection p-8" style={{ boxShadow: "0 4px 30px rgba(61,35,20,0.05)" }}>
      <p className="text-rosegold text-sm mb-4 tracking-wider">★★★★★</p>
      <p className="font-inter font-light italic text-sm leading-[1.8] text-darktext/75 mb-5">
        &ldquo;{text}&rdquo;
      </p>
      <p
        className="font-cormorant text-espresso tracking-[0.1em] uppercase"
        style={{ fontVariant: "small-caps", fontSize: "0.85rem" }}
      >
        {author}
        <span
          className="font-inter font-light text-[0.65rem] text-darktext/40 ml-2 tracking-wide"
          style={{ fontVariant: "normal", textTransform: "none" }}
        >
          · {location}
        </span>
      </p>
    </div>
  );
}
