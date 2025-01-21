import Header from "../components/header";

export default function Home() {
  return (
    <div className="w-screen h-1/2 text-white bg-home-game bg-cover bg-center relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-gray-950 before:pointer-events-none">
      <Header />
      <h1 className="relative z-10">Home</h1>
    </div>
  );
}