import { writeFileSync } from 'fs';
import { resolve } from 'path';
import fetch from 'node-fetch';

const baseUrl = 'https://PROJECT_NAME.com';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
];

async function getDynamicUrls() {
  try {
    const [xRes, yRes, zRes] = await Promise.all([
      fetch('https://api.PROJECT_NAME.com/api/x/all/'),
      fetch('https://api.PROJECT_NAME.com/api/y/all/'),
      fetch('https://api.PROJECT_NAME.com/api/z/unhidden/'),
    ]);

    const [xData, yData, zData] = await Promise.all([
      xRes.json(),
      yRes.json(),
      zRes.json(),
    ]);

    const x = Array.isArray(xData.results) ? xData.results : [];
    const y = Array.isArray(yData.results) ? yData.results : [];
    const z = Array.isArray(zData.results) ? zData.results : [];

    return [
      ...x.map(t => `/x/${t.slug}`),
      ...y.map(d => `/y/${d.slug}`),
      ...z.map(b => `/z/${b.slug}`),
    ];
  } catch (error) {
    console.error('Failed to fetch dynamic URLs:', error);
    return [];
  }
}

async function generateSitemap() {
  const dynamicRoutes = await getDynamicUrls();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('')}
</urlset>
`;
  writeFileSync(resolve('dist/sitemap.xml'), sitemap);
}

generateSitemap();
