import hero from "../assets/PNG/4 SCENE.png";
import TipsCard from "../components/tips-card";
import { useRouteLoaderData } from "react-router";
import jsonData from "../../db.json";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import EmptyData from "../components/Empty-data";
import image from "../assets/Images/3.jpg"
import { card } from "../model/tips-card-model";

export default function Home() {
  const [searchParams] = useSearchParams();
  const tipData= useRouteLoaderData("root") as card[];
  const [tips, setTips] = useState(tipData);
  
  const query = useMemo(() => {
    if(searchParams.has("q") && searchParams.get("q")==="") {
      return searchParams.append("q","all-data")
    }
    const word = searchParams.get("q")?.split(" ");
    const captalize = word
      ?.map((word) => word?.at(0)?.toUpperCase() + word?.slice(1))
      ?.join(" ");
    return captalize;
  }, [searchParams]);

  //tips data filter by programing language
  useEffect(() => {
    if (!query) return;
    const newArray = tips.slice().filter((tip) => {
      return (
        tip.title.includes(query) ||
        tip.tag.includes(query) ||
        tip.description.includes(query)
      );
    });
    setTips(newArray)
  }, [tipData, query]);

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
        {!tips.length && <EmptyData/>}
        {tips.length && tips.map((tip, index) => (
          <TipsCard
            key={index}
            // image={tip.image}
            image={image}
            title={tip.title}
            tag={tip.tag}
            description={tip.description}
          />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  // const request = await fetch("http://localhost:3000/data");
  // const response = await request.json();
  return jsonData.data;
}
