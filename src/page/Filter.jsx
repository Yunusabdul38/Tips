import { useRouteLoaderData } from "react-router";
import TipsCard from "../components/tips-card";

export default function Filter() {
  const tips = useRouteLoaderData("root")

  return (
    <section className="grid md:grid-cols-[0.5fr_4fr] gap-2 h-screen overflow-hidden">
       <div className="flex gap-2 flex-col sm:flex-row sm:items-center md:items-start md:flex-col md:mt-5 px-4 h-full">
      <h3 className="font-medium text-gray-900 dark:text-white">
        Tag
      </h3>
      <ul className="grid grid-cols-2 sm:flex-row md:flex-col items-center w-full mx-auto justify-center text-sm font-medium text-gray-900 bg-white md:border-none capitalize border border-gray-200 rounded-lg sm:flex">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="javascript"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="javascript"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              javascript
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="python"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="phython"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              phython
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="java"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="java"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              java
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="rubby"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="rubby"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              rubby
            </label>
          </div>
        </li>
        <li className="w-full border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="go"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="go"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Go
            </label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center ps-3 md:ps-0">
            <input
              id="C++"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="C++"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              C++
            </label>
          </div>
        </li>
      </ul>
      </div>
      <aside className="flex flex-wrap md:grid md:grid-cols-3  justify-evenly gap-5 p-4 bg-slate-300  overflow-auto">
      {tips.map((tip, index) => (
          <TipsCard
            key={index}
            image={tip.image}
            title={tip.title}
            tag={tip.tag}
            description={tip.description}
          />
        ))}
      </aside>
    </section>
  )
}
