import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'dgoqf851',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
