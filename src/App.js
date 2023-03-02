import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>Cocktails</h1>

      <section className="container">
        {/* single cocltail */}
        <article className="cocktail">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Singapore-sling-7ddad3e.jpg?quality=90&webp=true&resize=600,545"
            alt=""
            className="cocktail-img"
          />
          <h2 className="cocktail-title">Title</h2>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            illum aut nihil ullam commodi maiores alias vel doloribus ab
            perspiciatis.
          </p>
          <p className="ingredients">Lorem ipsum dolor sit amet.</p>
        </article>

        {/* single cocltail */}
        <article className="cocktail">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Singapore-sling-7ddad3e.jpg?quality=90&webp=true&resize=600,545"
            alt=""
            className="cocktail-img"
          />
          <h2 className="cocktail-title">Title</h2>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            illum aut nihil ullam commodi maiores alias vel doloribus ab
            perspiciatis.
          </p>
          <p className="ingredients">Lorem ipsum dolor sit amet.</p>
        </article>

        {/* single cocltail */}
        <article className="cocktail">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Singapore-sling-7ddad3e.jpg?quality=90&webp=true&resize=600,545"
            alt=""
            className="cocktail-img"
          />
          <h2 className="cocktail-title">Title</h2>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            illum aut nihil ullam commodi maiores alias vel doloribus ab
            perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Magni, odio quasi eum aspernatur eligendi aperiam minus
            necessitatibus laudantium quam officia.
          </p>
          <p className="ingredients">Lorem ipsum dolor sit amet.</p>
        </article>

        {/* single cocltail */}
        <article className="cocktail">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Singapore-sling-7ddad3e.jpg?quality=90&webp=true&resize=600,545"
            alt=""
            className="cocktail-img"
          />
          <h2 className="cocktail-title">Title</h2>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            illum aut nihil ullam commodi maiores alias vel doloribus ab
            perspiciatis.
          </p>
          <p className="ingredients">Lorem ipsum dolor sit amet.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
