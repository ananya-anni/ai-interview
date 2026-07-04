import Input from "./Input";
import { useState } from "react";
const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const validateInputs = () => {
    let newError = {
      errorEmail: "",
      errorPassword: "",
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.userEmail.trim() === "") {
      newError.errorEmail = "Email is required";
    } else if (!emailRegex.test(formData.userEmail)) {
      newError.errorEmail = "Please enter a valid email";
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (formData.userPassword.trim() === "") {
      newError.errorPassword = "Password is required";
    } else if (!passwordRegex.test(formData.userPassword)) {
      if (
        formData.userPassword.length < 8 ||
        formData.userPassword.length > 15
      ) {
        newError.errorPassword = "Password must contain 8 to 15 characters.";
      } else
        newError.errorPassword = `Password must contain at least 1 lowecase,
           1 uppercase ,1 digit and 1 special character.`;
    }
    setErrors(newError);
    return newError;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrorValue = validateInputs();
    if (Object.values(newErrorValue).every((error) => error === "")) {
      setFormData({
        userEmail: "",
        userPassword: "",
      });
    }
  };

  const handleChange = (event) => {
    setFormData((currValue) => {
      const newFormData = {
        ...currValue,
        [event.target.name]: event.target.value,
      };
      return newFormData;
    });
  };
  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          id="user-email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          inputName="userEmail"
          value={formData.userEmail}
          onInputChange={handleChange}
          error={errors.errorEmail}
        />

        <Input
          id="user-password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          inputName="userPassword"
          value={formData.userPassword}
          onInputChange={handleChange}
          error={errors.errorPassword}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-[5px] mt-3"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
