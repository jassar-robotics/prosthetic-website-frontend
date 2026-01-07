// LightboxGallery.jsx or .tsx
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: 'https://source.unsplash.com/random/800x600?sig=1' },
  { src: 'https://source.unsplash.com/random/800x600?sig=2' },
  { src: 'https://source.unsplash.com/random/800x600?sig=3' },
];

export default function LightboxGallery() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Gallery</button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        plugins={[Thumbnails]}
        thumbnails={{
          border: 2,
          padding: 4,
          width: 100,
          height: 80,
          borderRadius: 4,
        }}
      />
    </>
  );
}
