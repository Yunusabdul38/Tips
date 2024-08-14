import {motion} from "framer-motion"
import { CiSearch } from "react-icons/ci";
export default function ProductSearch() {
  return (
    <form className="relative w-fit text-slate-50">
        <CiSearch className="absolute left-5 p-1 text-4xl"/>
          <motion.input type="text" className="bg-inherit outline-none border-slate-50 border rounded-sm pl-5 p-1 "
          whileFocus={{scale:1,borderRadius:"15px"}}
          initial={{scale:0.8,borderRadius:"10px"}}
          />
    </form>
  )
}
