import Header from "../components/header";
import HomeBanner from "../components/home-banner";

export default function Home() {
  return (
    <HomeBanner>
      <Header />
      <div className="flex justify-center items-center flex-col space-y-4 text-4xl relative mt-36">
        <p>Track games you've played</p>
        <p>Save those you want to play</p>
        <p>Tell your friends what's good</p>
      </div>
      <div className="flex justify-center items-center flex-col space-y-4">
      <button className="bg-gray-700 text-white px-4 py-2 rounded mt-36 hover:bg-gray-600 relative">
           Get started - it's free!
        </button>
      </div>
    </HomeBanner>
  );
}