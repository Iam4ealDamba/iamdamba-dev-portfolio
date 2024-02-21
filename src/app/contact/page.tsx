"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import emailjs from "@emailjs/browser";
import validator from "validator";
import { useState, useEffect, useRef, FC, FormEvent } from "react";
import { motion } from "framer-motion";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "@/layout";
import { InitEmail } from "@/services/email";

// ||||||||||||||||||||||||||||| ContactPage Component ||||||||||||||||||||||||||||||||||||

interface IContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: FC = ({}) => {
  // Hooks
  const formRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState({
    target: "",
    content: "",
  });
  const {
    control,
    handleSubmit,
    resetField,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IContactFormProps>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Variables
  const max_message_length = 600;
  const message_text = watch("message");

  // Functions
  const handleSubmitEmail: SubmitHandler<IContactFormProps> = async ({
    email,
    name,
    message,
  }) => {
    try {
      if (!name.length || !email.length || !message.length) {
        toast("Erreur: Champs invalide, veuillez recommencer.", {
          type: "warning",
        });

        return;
      }
      if (!validator.isEmail(email)) {
        toast("Erreur: L'email renseignée n'est pas correct (ex: exemple@test.test).", {
          type: "error",
        });
        return;
      }
      if (!validator.isAlpha(name)) {
        toast(
          "Erreur: Le nom renseignée n'est pas correct (dois seulement contenir des lettres de A-Z)",
          {
            type: "error",
          }
        );
        return;
      }
      if (!formRef.current) return;

      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current
        )
        .then(() => {
          // Show success message
          toast("Message envoyé avec succes !", {
            type: "success",
          });

          resetField("name");
          resetField("email");
          resetField("message");
        })
        .catch(() => {
          // Show error message
          toast("Erreur: Veuillez recommencer ulterieurement.", {
            type: "error",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleMessageMaxLength = (value: number) => {
    let string = "";
    switch (true) {
      case value < 300 && value > 50:
        string = "text-orange-400";
        break;
      case value < 50:
        string = "text-red-700";
        break;
    }

    return string;
  };

  // Effects
  useEffect(() => {
    InitEmail();
  }, []);

  // Return
  return (
    <Layout>
      <motion.main
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          aria-label="banner"
          className="w-full bg-tw_secondary text-tw_primary pt-40 pb-10 text-center uppercase space-y-10 px-10"
        >
          <h1 className="text-5xl font-black desktop_sm:text-xl">Contact</h1>
          <p className="max-w-[800px] mx-auto desktop_sm:hidden">
            Il est vraiment important pour moi d’avoir un contact avec vous,
            afin de pouvoir repondre à chacune des vos questions, donc n’hesiter
            pas !
          </p>
        </div>
        <section className="list py-20 space-y-20 bg-color_secondary px-4">
          <form
            className="max-w-[800px] mx-auto space-y-10 py-10 rounded-xl bg-color_primary"
            ref={formRef}
          >
            <div className="top text-tw_text_dark px-10  space-y-8">
              <div className="input flex flex-col space-y-4">
                <label htmlFor="name" className="text-tw_text_light text-lg">
                  Enter Your Name *
                </label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      name="name"
                      value={value}
                      onChange={onChange}
                      placeholder="Entrez votre nom complet ici..."
                      className="py-2 px-6 bg-tw_accent/25 outline-none text-tw_text_light rounded-lg transition-colors focus:bg-tw_accent/35"
                    />
                  )}
                />
                {errorMsg && errorMsg.target == "nom" && (
                  <p className={`text-red-500 text-sm`}>{errorMsg.content}</p>
                )}
              </div>
              <div className="input flex flex-col space-y-4">
                <label htmlFor="email" className="text-tw_text_light text-lg">
                  Enter Your Email *
                </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { value, onChange } }) => (
                    <input
                      type="text"
                      name="email"
                      value={value}
                      onChange={onChange}
                      placeholder="Entrez votre email ici..."
                      className="py-2 px-6 bg-tw_accent/25 outline-none text-tw_text_light rounded-lg transition-colors focus:bg-tw_accent/35"
                    />
                  )}
                />
                {errorMsg && errorMsg.target == "email" && (
                  <p className={`text-red-500 text-sm`}>{errorMsg.content}</p>
                )}
              </div>
              <div className="input flex flex-col space-y-4">
                <label htmlFor="message" className="text-tw_text_light text-lg">
                  Enter Your Message *
                </label>
                <Controller
                  control={control}
                  name="message"
                  render={({ field: { value, onChange } }) => (
                    <textarea
                      name="message"
                      value={value}
                      onChange={onChange}
                      placeholder="Entrez votre message ici..."
                      className="py-2 px-6 bg-tw_accent/25 outline-none text-tw_text_light rounded-lg h-[250px] transition-colors focus:bg-tw_accent/35"
                      maxLength={max_message_length}
                      rows={5}
                    />
                  )}
                />
              </div>
            </div>
            <div className="middle flex justify-center items-center gap-x-4 max_sm:flex-col max_sm:gap-y-2">
              <p>Charactères restants:</p>
              <p
                className={`${handleMessageMaxLength(
                  max_message_length - getValues("message").length
                )}`}
              >
                {max_message_length - getValues("message").length} chars.
              </p>
            </div>
            <div className="bottom flex justify-center">
              <button
                className="px-4 py-2 bg-tw_primary text-tw_text_dark rounded-lg"
                onClick={handleSubmit(handleSubmitEmail)}
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </motion.main>
    </Layout>
  );
};
export default ContactPage;
