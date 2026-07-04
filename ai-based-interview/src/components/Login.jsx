import Input from "./Input";
const Login = () => {
  return (
    <div className="flex flex-col">
      <form action="" className="flex flex-col gap-3">
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
