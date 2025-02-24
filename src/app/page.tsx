import { DisplayCard, Nav } from "./components";

export default function Home() {
  return (
    <div className="max-w-2xl m-auto w-full p-2 md:py-2 h-svh flex flex-col">
      <Nav />
      <DisplayCard />
    </div>
  );
}
