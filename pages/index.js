import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import DiscoverCard from "../components/DiscoverCard";
import {
  smallCardData,
  mediumCardData,
  discoverData,
} from "../constants/cardData";

export default function Home({ cardsData }) {
  return (
    <div className="">
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smallCardData.map(({ location, distance, image }) => (
              <SmallCard
                location={location}
                distance={distance}
                image={image}
                key={image}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold pb-5 py-8">
            Discover things to do
          </h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 space-x-9">
            {discoverData.map(({ image, title, desc }) => (
              <DiscoverCard
                image={image}
                title={title}
                desc={desc}
                key={image}
              />
            ))}
          </div>
        </section>

        <LargeCard
          image="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      cardsData,
    },
  };
}
