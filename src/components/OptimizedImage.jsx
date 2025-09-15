function OptimizedImage({ src, alt, ...props }) {
  if (!src) {
    console.error(
      "OptimizedImage: A prop 'src' (o caminho da imagem original) é obrigatória."
    );
    return null;
  }

  const avifSrc = `${src}?format=avif&srcset`;
  const webpSrc = `${src}?format=webp&srcset`;

  return (
    <picture>
      {/* O navegador tentará carregar o primeiro formato que ele suportar */}
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />

      {/* A imagem original (JPG/PNG) serve como fallback */}
      <img src={src} alt={alt} loading="lazy" decoding="async" {...props} />
    </picture>
  );
}

export default OptimizedImage;
