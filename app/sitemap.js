export default function sitemap() {
  return [
    {
      url: 'https://parther.in',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
      images: [
        {
          url: 'https://parther.in/title.png',
          caption: 'Parther logo image',
        },
      ],
    },
  ];
}
