import Nav from "@components/Nav";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Nav />
      <h1 className="head_text blue_gradient text-center sm: text-6xl">
        Pacer Labs Auth
        <br />
        <span className="head_text text-center">Basic Login and Logout Functionality</span>
      </h1>
      <p className="desc text-center sm: text-xl max-w-2xl">
        A simple Next.js application with Redux Toolkit for state management. This implementation also includes basic login and logout functionality.
      </p>
    </section>
  )
}

export default Home;