import Input from "./Input";
const SignUp = () => {
  return (
    <div className="flex flex-col">
      <form action="" className="flex flex-col gap-3">
        <Input
          id="fullName"
          label="Full name"
          type="text"
          placeholder="Enter your name"
        />

        <Input
          id="user-email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          id="user-password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />

        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="Enter your password"
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
