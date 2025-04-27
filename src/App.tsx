import { SiteNav } from "./components/SiteNav";
import { Main } from "./components/Main";
import { Gallery } from "./components/Gallery";
import { Product } from "./components/Product";

import "./app.scss";

function App() {
  return (
    <>
      <SiteNav />
      <Main title="What's new?">
        <Gallery>
          <Product pictureUrl="https://picsum.photos/id/5/1000" price={20} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis voluptates, distinctio omnis eum sit! Dolor commodi quaerat doloremque. Nisi tempora commodi eos ullam perspiciatis dolores excepturi fuga, itaque molestiae." />
          <Product pictureUrl="https://picsum.photos/id/6/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
          <Product pictureUrl="https://picsum.photos/id/7/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
          <Product pictureUrl="https://picsum.photos/id/8/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
          <Product pictureUrl="https://picsum.photos/id/9/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
          <Product pictureUrl="https://picsum.photos/id/11/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
          <Product pictureUrl="https://picsum.photos/id/12/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
        </Gallery>
      </Main>
    </>
  );
}

export default App;
