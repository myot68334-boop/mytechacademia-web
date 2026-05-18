export type ScreenshotItem = {
  title: string;
  caption: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export function ScreenshotShowcase({
  items,
  compact = false,
}: {
  items: ScreenshotItem[];
  compact?: boolean;
}) {
  return (
    <div className={`screens-grid ${compact ? "screens-grid--compact" : ""}`}>
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`screen-card reveal-card ${item.featured ? "screen-card--featured" : ""}`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div className={`screen-image-wrap ${item.featured ? "screen-image-wrap--featured" : ""}`}>
            <img src={item.image} alt={item.alt} className="screen-image" />
          </div>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </article>
      ))}
    </div>
  );
}
