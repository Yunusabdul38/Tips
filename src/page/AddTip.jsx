import { Form, useRouteLoaderData } from "react-router-dom";
import TipsCard from "../components/tips-card";

export default function AddTip() {
  const data = useRouteLoaderData("root");
  const tip = [data[0],data[1],data[2]]
  return (
    <>
    <Form className="capitalize" method="POST" encType="multipart/form-data">
      <div className="flex gap-1 lg:gap-3 items-start lg:justify-end flex-col mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
        <label className="font-normal lg:font-semibold text-base">title:</label>
        <input
          name="title"
          type="text"
          placeholder="Tip title"
          className="w-full lg:w-full border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
          required
          
        />
      </div>
      <div className="flex gap-1 lg:gap-3 items-start lg:justify-end flex-col mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
        <label className="text-[#2D2C3C] text-base lg:font-medium font-normal">
          select an image
        </label>
        <div className="file:bg-[#EEEEEE] file:font-openSans border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg  p-2.5 placeholder-[#828282] bg-white outline-none  lg:mx-0 mx-auto min-w-fit mb-4 w-full">
          <input
            name="image"
            className="text-start text-sm border cursor-pointer focus:outline-none border-none file:text-[#1D1D1D] file:font-medium"
            id="file_input"
            type="file"
            placeholder="select an image"
            required
            // onChange={(e) => {
            //   const url = URL.createObjectURL(e.target.files[0]);
            // }}
          />
        </div>
      </div>
      <div className="flex gap-1 lg:gap-3 items-start lg:justify-end flex-col mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Tag
        </h3>
        <ul className="grvalue grvalue-cols-2 items-center w-full mx-auto justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="javascript"
                type="radio"
                id="javascript"
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
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="python"
                type="radio"
                id="python"
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
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="java"
                type="radio"
                id="java"
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
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="rubby"
                type="radio"
                id="rubby"
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
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="go"
                type="radio"
                id="go"
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
            <div className="flex items-center ps-3">
              <input
                name="tag"
                value="C++"
                type="radio"
                id="C++"
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
      <div className="flex gap-1 lg:gap-3 items-start lg:justify-end flex-col mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
        <label className="inline-flex text-sm items-center lg:items-start font-normal lg:font-semibold lg:w-[10.5rem]">
          Event Description
        </label>
        <textarea
          name="description"
          className="rounded-xl p-4 w-full h-44 border borer-[#828282] text-[#828282] "
          placeholder="little description about your tip "
          required
          
        />
         <button type="submit" className="px-6 py-3 capitalize border border-gray-800 bg-gray-800 hover:bg-slate-50 text-slate-50 hover:text-black mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4">submit</button>
      </div>
    </Form>
    <section className="flex flex-wrap justify-evenly gap-5 bg-slate-50 p-4 mt-10">
    { tip.map((tip, index) => (
          <TipsCard
            key={index}
            image={tip.image}
            title={tip.title}
            tag={tip.tag}
            description={tip.description}
          />
        ))}
    </section>
    </>    
  );
}

export const action = async ({request})=>{
  const data = await request.formData()
 
  const userData = {
    title:data.get("title"),
    image:data.get("image")[0],
    tag:data.get("tag"),
    description:data.get("description")
  }

  console.log(request,data.get("image"))
}