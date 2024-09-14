import { motion } from "framer-motion";
// import { CiSearch } from "react-icons/ci";
import { Form, useSubmit} from "react-router-dom";

export default function ProductSearch() {
  let submit = useSubmit();

  return (
    <Form
      className="relative w-fit text-slate-50"
      method="get"
      onChange={(event) => {
        submit(event.currentTarget);
      }}
    >
      {/* <CiSearch className="absolute left-5 p-1 text-4xl" /> */}
      <motion.input
        required
        name="q"
        type="text"
        className="bg-inherit outline-none border-slate-50 border rounded-sm pl-5 p-1 "
     
        whileFocus={{ scale: 1, borderRadius: "15px" }}
        initial={{ scale: 0.8, borderRadius: "10px" }}
      />

    </Form>
  );
}

