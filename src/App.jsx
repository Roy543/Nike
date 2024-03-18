import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProducts,
  Service,
  Subscribe,
  SuperQaulity,
  SpecialOffer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="reletive">
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
  </main>
);

export default App;
