import cardImage from "../assets/nextjs.png";
import { motion } from "framer-motion";

const item = {
  show: { opacity: 1, scale: 1,x:0 },
  hid: { opacity: 0, scale: 0 },
};
export default function TipsCard({image,title,tag,description}) {
  return (
    <motion.div
      className="bg-slate-50 text-slate-900 border rounded-lg min-h-72 max-h-80 h-[320px] max-w-96 cursor-pointer"
      variants={item}
      initial="hid"
      whileInView="show"
      transition={{delay:0.2,type:"just"}}
    >
      <img src={image} className="h-1/2 rounded-t-lg w-full object-fill" />
      <div className="px-5 py-3">
        <h1 className="capitalize font-medium text-2xl">{title}</h1>
        <h3 className="capitalize font-normal text-xl">{tag}</h3>
        <p>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
