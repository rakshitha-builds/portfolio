// Self-hosted technology logos (public/icons). Decorative: the label always sits beside it.
// `tile` puts the logo on a light rounded tile so dark logos stay visible on dark surfaces.
export default function TechIcon({ name, size = 18, tile = false, className = '' }) {
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/icons/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
  if (!tile) return img;
  return <span className="flex shrink-0 items-center justify-center rounded-md bg-[#eef3fb] p-[3px]">{img}</span>;
}
