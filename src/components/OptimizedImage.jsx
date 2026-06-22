function OptimizedImage({ src, alt, ...props }) {
  if (!src) {
    console.error("OptimizedImage: A prop 'src' (o caminho da imagem original) é obrigatória.");
    return null;
  }

  const isDataUri = typeof src === "string" && src.startsWith("data:");
  const isSvg = typeof src === "string" && src.endsWith(".svg");
  const skipOptimization = isDataUri || isSvg;

  if (skipOptimization) {
    return <img src={src} alt={alt} loading="lazy" decoding="async" {...props} />;
  }

  const avifSrc = `${src}?format=avif&srcset`;
  const webpSrc = `${src}?format=webp&srcset`;

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" decoding="async" {...props} />
    </picture>
  );
}

export default OptimizedImage;
