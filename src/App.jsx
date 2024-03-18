import {
  Hero,
  Footer,
  CustomerReviews,
  PopularProduct,
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
  </main>
);

export default App;
