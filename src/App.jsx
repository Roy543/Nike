import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="reletive">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
  </main>
);

export default App;
