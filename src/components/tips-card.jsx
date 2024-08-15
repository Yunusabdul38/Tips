import cardImage from "../assets/nextjs.png";
import { motion } from "framer-motion";

const item = {
  show: { opacity: 1, scale: 1,x:0 },
  hid: { opacity: 0, scale: 0 },
};
export default function TipsCard() {
  return (
    <motion.div
      className="bg-slate-50 text-slate-900 border rounded-lg min-h-72 max-h-80 h-[320px] max-w-96 cursor-pointer"
      variants={item}
      initial="hid"
      whileInView="show"
      transition={{delay:0.2,type:"just"}}
    >
      <img src={cardImage} className="h-1/2 rounded-t-lg" />
      <div className="px-5 pb-3">
        <h1 className="capitalize font-medium text-2xl">learn react</h1>
        <h3 className="capitalize font-normal text-xl">react</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis
          hic dicta 
        </p>
      </div>
    </motion.div>
  );
}
