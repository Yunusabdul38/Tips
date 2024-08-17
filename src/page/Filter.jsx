import { useRouteLoaderData } from "react-router";
import TipsCard from "../components/tips-card";
import { Form, useSearchParams, useSubmit } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import EmptyData from "../components/Empty-data";

export default function Filter() {
  const [searchParams] = useSearchParams();
  const data = useRouteLoaderData("root");
  const [tips, setTips] = useState(data);

  let submit = useSubmit();
  const query = useMemo(() => {
    return searchParams.getAll("tag");
  }, [searchParams]);

  //tips data filter by programing language
  useEffect(() => {
    if (!query.length) return;
    const newArray = query.flatMap((querys) => {
      return data.slice().filter((tip) => tip.tag === querys);
    });
    setTips(newArray);
  }, [query, data]);

  return (
    <section className="grid md:grid-cols-[0.5fr_4fr] gap-2 h-screen overflow-hidden">
      <div className="flex gap-2 flex-col sm:flex-row sm:items-center md:items-start md:flex-col md:mt-5 px-4 h-full">
        <h3 className="font-medium text-gray-900 dark:text-white">Tag</h3>
        <Form
          method="get"
          onChange={async (event) => {
            submit(event.currentTarget);
          }}
        >
          <ul className="grid grid-cols-2 sm:flex-row md:flex-col items-center w-full mx-auto justify-center text-sm font-medium text-gray-900 bg-white md:border-none capitalize border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  type="checkbox"
                  value="JavaScript"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="javaScript"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  javascript
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  type="checkbox"
                  value="Python"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Python"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Python
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  type="checkbox"
                  value="Java"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Java"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  java
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  value="Ruby"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Ruby"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  rubby
                </label>
              </div>
            </li>
            <li className="w-full border-gray-200 sm:border-b-0 sm:border-r md:border-r-0">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  value="Go"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="Go"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Go
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center ps-3 md:ps-0">
                <input
                  name="tag"
                  value="C++"
                  type="checkbox"
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
        </Form>
      </div>
      <aside className="border flex flex-wrap md:grid-cols-3  justify-evenly gap-5 p-4 bg-slate-300  overflow-auto">
        {!tips.length && <EmptyData />}
        {tips.length > 0 &&
          tips.map((tip, index) => (
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
  );
}
