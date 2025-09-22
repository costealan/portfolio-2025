import Header from "./components/Header";
import About from "./About/Page";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-7xl pt-40 pr-25 pb-23 pl-45 ">
        <Header />
        <main className="flex-1">
          <About />
        </main>
      </div>
    </div>
  );
}
