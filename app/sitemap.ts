import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/how-to`,
      priority: 0.9,
    },
    {
      url: `${process.env.BASE_URL}/about`,
      priority: 0.9,
    },
  ]
}