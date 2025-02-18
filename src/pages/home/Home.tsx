import { Navbar } from "../../../src/components/layout/HomeLayout/components/Navbar";
// import { PropertyCard } from "../landlord/components/PropertyCard2";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1 bg-muted/40">
        {/* Hero section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Luxury Living</h1>
          <p className="text-xl mb-8">Without breaking the bank</p>

          {/* Property search form */}
          <div className="max-w-2xl mx-auto">
            {/* Implement property search form here */}
          </div>
        </section>

        {/* Featured properties */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Properties
          </h2>
        </section>

        {/* Testimonials */}
        <section className="bg-primary-50 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What our tenants say
          </h2>
          {/* Implement testimonials carousel here */}
        </section>

        {/* CTA section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Claim the life that you deserve
          </h2>
          <p className="text-xl mb-8">
            Whether you are looking for an apartment rental or house rental in
            Edmonton, we can help ensure your next home is the right one. Join
            one of our communities to experience the LuxOasis difference today!
          </p>
          <a
            href="/property-listings"
            className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg inline-block"
          >
            Search Homes
          </a>
        </section>

        {/* Latest articles */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Living LuxOasis. Keep up to date
          </h2>
          {/* Implement latest articles grid here */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        {/* Implement footer content and newsletter signup here */}
      </footer>
    </div>
  );
};
