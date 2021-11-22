import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

import {
  smallCardData,
  mediumCardData,
  discoverData,
} from "../constants/cardData";

export default function Home() {
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
      </main>
    </div>
  );
}
