import Footer from '@/components/molecules/footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fetchAdverts } from '@/lib/data'

export default async function Page() {
  const adverts = await fetchAdverts()
  return (
    <main>
      <section className="bg-[#EEEFFB] rounded-lg">
        <div className="py-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 pl-4 pr-4">
            {adverts.map((advert, index) => (
              <div
                key={advert.id}
                className={`bg-black text-white rounded-lg p-16 ${
                  index === 0 || index === 3 ? 'col-span-2' : 'row-span-2'
                }`}
              >
                <h1 className="flex justify-center">{advert.title}</h1>
                <p className="flex justify-center">{advert.description}</p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="flex text-[#1A0B5B] text-4xl font-bold justify-center ">
          Featured Ads
        </h1>
        <div className="py-4"></div>
      </section>
      <section>
        <h1 className="flex text-[#1A0B5B] text-4xl font-bold justify-center ">
          Latest Ads
        </h1>
        <Tabs defaultValue="new-arrival">
          <TabsList className="w-full">
            <TabsTrigger value="new-arrival">New Arrival</TabsTrigger>
            <TabsTrigger value="best-seller">Best Seller</TabsTrigger>
            <TabsTrigger value="fetured">Featured</TabsTrigger>
            <TabsTrigger value="special-offer">Special Offer</TabsTrigger>
          </TabsList>
          <TabsContent value="new-arrival">new arrivals content</TabsContent>
          <TabsContent value="best-seller">best seller content</TabsContent>
          <TabsContent value="fetured">featured content</TabsContent>
          <TabsContent value="special-offer">special offer content</TabsContent>
        </Tabs>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
