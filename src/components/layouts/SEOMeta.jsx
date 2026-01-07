function SeoMeta({
  shouldIndex = false,
  title,
  description,
  canonical,
  keywords = '',
  image = 'https://PROJECT_NAME.com/image.webp',
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {shouldIndex ? (
        <>
          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonical} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={image || 'https://PROJECT_NAME.com/image.webp'} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image || 'https://PROJECT_NAME.com/image.webp'} />
        </>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </>
  );
}

export default SeoMeta;
