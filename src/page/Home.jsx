import hero from "../assets/PNG/4 SCENE.png";
import TipsCard from "../components/tips-card";

export default function Home() {
  return (
    <>
      <header className="w-full h-[500px] flex flex-col-reverse md:flex-row justify-center items-center md:justify-between">
        <h1 className="md:w-1/2 text-5xl flex justify-center text-center sm:text-start items-center">
          Unlock Your <br />
          Coding Potential
        </h1>
        <img src={hero} className="min-h-96  md:w-1/2" />
      </header>
      <div className="flex flex-wrap justify-evenly gap-5 bg-gray-950 p-4 mt-10">
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
        <TipsCard />
      </div>
    </>
  );
}
