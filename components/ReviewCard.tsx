interface ReviewCardProps {
  text: string;
  author: string;
  location: string;
}

export default function ReviewCard({ text, author, location }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-espresso/10">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-rosegold text-lg">★</span>
        ))}
      </div>
      <p className="text-darktext/80 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-semibold text-espresso text-sm">{author}</p>
        <p className="text-darktext/50 text-xs">{location}</p>
      </div>
    </div>
  );
}
