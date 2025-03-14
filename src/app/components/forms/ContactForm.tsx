"use client";
import { useState } from "react";
import Typography from "../global/Typography";
import axios from "axios";

interface ContactFormState {
  Name: string;
  Email: string;
  Message: string;
}
interface ContactFormStateErrors {
  Name: boolean;
  Email: boolean;
  Message: boolean;
}

const ContactForm = () => {
  const [formErrors, setFormErrors] = useState<ContactFormStateErrors>({
    Name: false,
    Email: false,
    Message: false,
  });

  const [formState, setFormState] = useState<ContactFormState>({
    Name: "",
    Email: "",
    Message: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isDisabled = Object.values(formErrors).some((val) => val);

  const sanitizeInput = (input: string) => {
    return input.replace(/["'`;\-]/g, "").trim();
  };

  const handleFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormState((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        name === "Email"
          ? !emailRegex.test(sanitizedValue)
          : sanitizedValue === "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/email/send`,
        formState,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      console.error({ message: "Failed to send message", err });
    } finally {
      setFormState({
        Name: "",
        Email: "",
        Message: "",
      });
      setFormErrors({ Name: false, Email: false, Message: false });
    }
  };

  return (
    <div className="pt-20 lg:flex shadow-2xl shadow-[rgba(0, 0, 0, 0.55)]">
      <div className="lg:w-1/2 p-5">
        <Typography variant="h6">About Me.</Typography>
        <p className="py-1">
          <b>Software Engineer</b> | <b>User Enthusiast</b> |{" "}
          <b>Competitive Gamer</b>
        </p>
        <p>
          Software engineer with a focus on front-end with 7+ years of
          enterprise experience building scalable solutions for some of the
          world’s top brands. Beyond writing code, I prioritize creating
          seamless, intuitive experiences—for both users and fellow engineers.
        </p>
      </div>
      <form
        className="flex justify-center items-center flex-col lg:w-1/2 p-5 bg-secondary-dark"
        onSubmit={handleSubmit}
      >
        {Object.entries(formState).map(([key, value]) => (
          <div key={key} className="flex flex-col w-full pt-5 text-primary">
            <label
              className={`${
                formErrors[key as keyof ContactFormStateErrors]
                  ? "text-red-500"
                  : "text-primary"
              }`}
            >
              {key} *
            </label>
            {key === "Message" ? (
              <textarea
                required
                name={key}
                className={`border-b p-2 bg-transparent outline-none ${
                  formErrors[key as keyof ContactFormStateErrors]
                    ? "border-red-500"
                    : "border-primary"
                }`}
                value={value}
                onChange={handleFormStateChange}
              />
            ) : (
              <input
                required
                type="text"
                name={key}
                className={`border-b p-2 bg-transparent outline-none ${
                  formErrors[key as keyof ContactFormStateErrors]
                    ? "border-red-500"
                    : "border-primary"
                }`}
                value={value}
                onChange={handleFormStateChange}
              />
            )}
          </div>
        ))}
        <div className="w-full">
          <button
            className="bg-primary py-3 px-10 rounded-md w-full text-lg disabled:bg-disabledBg mt-3"
            disabled={isDisabled}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
