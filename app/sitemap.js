export default function sitemap() {
  return [
    {
      url: 'https://parther.in',
      lastModified: new Date().toISOString(), // Use ISO string format for the date
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
