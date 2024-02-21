import { Input } from "../components/Input";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import mail from "../assets/mail.svg"

function Contact() {
  const [state, handleSubmit] = useForm("xeqygwna");
  if (state.succeeded) {
    return (
        <motion.article className="flex flex-col items-center gap-16">
            <img src={mail} alt="Email" className="w-[200px] h-[200px]"/>
            <p className="font-medium text-2xl">thanks for the message, i will contact you soon</p>
        </motion.article>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full pt-4 lg:p-10 self-start"
    >
      <h2 className="text-4xl font-medium">Contact Me !</h2>
      <p className="mx-2 mt-4 mb-16 text-xl">
        If you are interested in my services send me a message and I will
        contact you
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto gap-10  justify-center"
      >
        <Input label="Name" type="text" name={"name"} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Input label="Email" type="email" name={"email"} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Input label="Message" type="text" name={"message"} />
        <button
          type="submit"
          className="w-28 h-12 bg-indigo-400 dark:bg-emerald-500 self-center rounded-2xl text-white text-lg font-medium transition-all dark:hover:bg-emerald-600  hover:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
}

export { Contact };
