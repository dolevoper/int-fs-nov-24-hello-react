import { PropsWithChildren } from "react";
import "./app.scss";

// Component based architecture

function App() {
  return (
    <>
      <SiteNav />
      <Main title="What's new?">
        <Gallery />
      </Main>
    </>
  );
}

function SiteNav() {
  return (
    <nav className="site-nav">
      <menu>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
      </menu>
    </nav>
  );
}

type MainProps = PropsWithChildren<{
  title: string;
}>;
function Main({ title, children }: MainProps) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

function Gallery() {
  return (
    <ul className="gallery">
      <Product pictureUrl="https://picsum.photos/id/5/1000" price={20} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis voluptates, distinctio omnis eum sit! Dolor commodi quaerat doloremque. Nisi tempora commodi eos ullam perspiciatis dolores excepturi fuga, itaque molestiae." />
      <Product pictureUrl="https://picsum.photos/id/6/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
      <Product pictureUrl="https://picsum.photos/id/7/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
      <Product pictureUrl="https://picsum.photos/id/8/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
      <Product pictureUrl="https://picsum.photos/id/9/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
      <Product pictureUrl="https://picsum.photos/id/11/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
      <Product pictureUrl="https://picsum.photos/id/12/1000" price={60} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio iste sapiente? Sed, similique vero, quae quas temporibus, dolores cupiditate sint placeat nesciunt modi assumenda ab voluptatum ipsam nihil inventore!" />
    </ul>
  );
}

type ProductProps = {
  pictureUrl: string;
  price: number;
  description: string;
};
function Product({ pictureUrl, price, description }: ProductProps) {
  return (
    <li className="card">
      <img src={pictureUrl} alt="" />
      <span>{price}₪</span>
      <p>{description}</p>
      <button className="primary">Add to card</button>
    </li>
  );
}

export default App;
