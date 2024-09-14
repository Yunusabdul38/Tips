import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
export default function Error() {
  const error:any = useRouteError()
  console.log(error)
  return (
    <section className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="text-center bg-[url(https://media.istockphoto.com/id/1389512831/photo/the-word-oops-in-3d.webp?b=1&s=170667a&w=0&k=20&c=4of8IbvMC7g8Oaur6hBfyvFDtbgTpNdkcSAU0q_2olA=)] bg-cover p-5 bg-right text-emerald-950">
        <h1 className="text-3xl font-serif">{error.status}</h1>
        <p className="text-2xl">
          oops page {error.statusText} 
        </p>
        <p className="text-2xl">Dont worry try one of these instead</p>
        <div className="grid gap-4 grid-cols-2 mt-4">
          <button className="border border-gray-800 p-1  rounded transition hover:border-orange-500 text-base text-black"><Link to="/">Go back to Home</Link></button>
          <button className="border border-gray-800 p-1  rounded transition hover:border-orange-500 text-base text-black">Report problem</button>
        </div>
      </div>
    </section>
  );
}
