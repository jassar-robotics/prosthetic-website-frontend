export function mergeGallery(data) {
  if (!data) return null;

  const gallery = [{ image: data.image }, ...(data.gallery || [])];
  return { ...data, gallery };
}
