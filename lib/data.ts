import { unstable_noStore as noStore } from 'next/cache'
import primsa from '@/lib/prisma'

export async function fetchAdverts() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  try {
    console.log('Fetching advert data...')
    const data = await primsa.advert.findMany()
    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch advert data.')
  }
}
