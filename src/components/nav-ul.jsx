import { Link, useLocation } from "react-router-dom";
import {motion} from "framer-motion"
const variant = {
    show:{opacity:1,scale:1,y:0},
    hid:{opacity:0,scale:0.5,transition:{staggerChildren: 0.5,},y:50}
}
const item = {
    show: { opacity: 1, x: 0 },
    hid: { opacity: 0, x: -100 },
  }
export default function NavUl({isValid}) {
    const {pathname:path} = useLocation()
  return (
    <motion.ul className={`${isValid?"hidden md:flex":"block"} rounded md:rounded-none p-4 md:p-0 bg-slate-400 w-full  capitalize flex-col md:flex-row mt-6 md:mt-0 flex justify-between  md:w-1/2`} variants={variant} animate="show" initial="hid" exit={{opacity:0,scale:0.5}} transition={{delay:0.3,type:"spring"}} >
    <motion.li  variants={item} className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${path=="/"?"bg-blue-950 w-fit p-1 px-2 rounded":""}`}><Link to="/">Home</Link></motion.li>
    <motion.li variants={item} className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${path=="/add-tip"?"bg-blue-950 w-fit p-1 px-2 rounded":""}`}><Link to="./add-tip">Add Tip</Link></motion.li>
    <motion.li variants={item} className={`cursor-pointer hover:bg-blue-950 hover:w-fit p-1 px-2 hover:rounded hover:text-sky-500 hover:transition ${path=="/filter"?"bg-blue-950 w-fit p-1 px-2 rounded":""}`}><Link to="./filter">filter</Link></motion.li>
  </motion.ul>
  )
}
