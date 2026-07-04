import Input from "./Input";
import { useState } from "react";
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    errorFullName: "",
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  });

  const getPasswordError = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!passwordRegex.test(password)) {
      if (password.length < 8 || password.length > 15) {
        return "Password must contain 8 to 15 characters.";
      } else {
        return `Password must contain at least 1 lowecase,
           1 uppercase ,1 digit and 1 special character.`;
      }
    } else {
      return "";
    }
  };

  const validateFormData = () => {
    let newErrorValue = {
      errorFullName: "",
      errorEmail: "",
      errorPassword: "",
      errorConfirmPassword: "",
    };
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.userEmail)) {
      newErrorValue.errorEmail = "Please enter a valid email address";
    }

    if (!nameRegex.test(formData.fullName)) {
      newErrorValue.errorFullName = "Please enter characters between 2 to 50";
    }

    const passwordErrorMessage = getPasswordError(formData.userPassword);
    newErrorValue.errorPassword = passwordErrorMessage;

    let passwordConfirmErrorMessage = getPasswordError(
      formData.confirmPassword,
    );

    if (passwordConfirmErrorMessage == "") {
      if (formData.confirmPassword !== formData.userPassword) {
        passwordConfirmErrorMessage = "Passwords does not match";
      } else {
        passwordConfirmErrorMessage = "";
      }
    }
    newErrorValue.errorConfirmPassword = passwordConfirmErrorMessage;

    setErrors(newErrorValue);
    return newErrorValue;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = validateFormData();
    if (Object.values(newError).every((error) => error === "")) {
      //Data submitted
      setFormData({
        fullName: "",
        userEmail: "",
        userPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          id="fullName"
          label="Full name"
          type="text"
          inputName="fullName"
          placeholder="Enter your name"
          onInputChange={handleChange}
          error={errors.errorFullName}
          value={formData.fullName}
        />

        <Input
          id="user-email"
          label="Email"
          type="email"
          inputName="userEmail"
          placeholder="Enter your email"
          onInputChange={handleChange}
          error={errors.errorEmail}
          value={formData.userEmail}
        />

        <Input
          id="user-password"
          type="password"
          label="Password"
          inputName="userPassword"
          placeholder="Enter your password"
          onInputChange={handleChange}
          error={errors.errorPassword}
          value={formData.userPassword}
        />

        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          inputName="confirmPassword"
          placeholder="Enter your password"
          onInputChange={handleChange}
          error={errors.errorConfirmPassword}
          value={formData.confirmPassword}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-[5px] mt-3"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
