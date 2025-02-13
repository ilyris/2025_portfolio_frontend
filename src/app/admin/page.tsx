import Typography from "../components/global/Typography";

const Login = () => {
  return (
    <main className="container">
      <div className="p-5 bg-white mx-auto my-20 w-1/3  rounded-xl border border-black p-5">
        <Typography variant="h3" className="text-center">
          Admin Login
        </Typography>
        <form className="flex justify-center items-center flex-col">
          <div className="flex flex-col w-full pt-5">
            <label>Username</label>
            <input
              type="text"
              className=" border-secondary-dark border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full py-5">
            <label>Password</label>
            <input
              type="password"
              className="border-secondary-dark border p-2 rounded-md"
            />
          </div>
          <div className="w-full">
            <button className="bg-secondary-light py-3 px-10 rounded-md w-full text-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Login;
