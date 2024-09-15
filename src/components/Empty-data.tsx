import hero from "../assets/PNG/3_SCENE.png";

export default function EmptyData() {
  return (
    <div className="w-full h-[500px] flex flex-col md:flex-row-reverse justify-center items-center md:justify-between text-slate-50">
        <h1 className="md:w-1/2 text-xl md:text-4xl flex justify-center text-center sm:text-start items-center">
          Requested data currently unavailabe <br />
         try searching for something else
          
        </h1>
        <img src={hero} className="min-h-96  md:w-1/2" />
    </div>
  )
}
