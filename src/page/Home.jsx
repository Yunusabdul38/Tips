import hero from "../assets/PNG/4 SCENE.png";
import TipsCard from "../components/tips-card";
import { useRouteLoaderData } from "react-router";

export default function Home() {
  const tips = useRouteLoaderData("root")
  
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
        {tips.map((tip, index) => (
          <TipsCard
            key={index}
            image={tip.image}
            title={tip.title}
            tag={tip.tag}
            description={tip.description}
          />
        ))}
      </div>
    </>
  );
}

export async function loader(){
  const request = await fetch("http://localhost:3000/data");
  const response = await request.json();
  return response
}