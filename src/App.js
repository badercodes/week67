// import ColorButton from "./ColorButton";
import Header from "./Header";
import Hero from "./Hero";
function App() {
  return (
    <>
      <Header />
      <Hero
        title="I am the title"
        description="Lorem ipsum dolor sit amet. Aut autem iure qui galisum voluptatem aut consequatur iste qui explicabo beatae est omnis aliquid et nostrum laboriosam! Qui velit modi qui corrupti voluptas eum rerum iusto aut deleniti nesciunt ut laboriosam consequatur et voluptatem exercitationem. Ex nemo quis nam eius temporibus ut vitae dignissimos aut obcaecati galisum est consectetur quia.        "
        button1="Go"
        button2="Cancel"
      />
      <Hero
        title="Buy more stuff now!!"
        description="2nd Hero Lorem ipsum dolor sit amet. Aut autem iure qui galisum voluptatem aut consequatur iste qui explicabo beatae est omnis aliquid et nostrum laboriosam! Qui velit modi qui corrupti voluptas eum rerum iusto aut deleniti nesciunt ut laboriosam consequatur et voluptatem exercitationem. Ex nemo quis nam eius temporibus ut vitae dignissimos aut obcaecati galisum est consectetur quia.        "
        button1="Buy"
        button2="Buy More"
      />
    </>
  );
}

export default App;
