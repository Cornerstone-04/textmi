import { Link } from "react-router-dom";

export const LandingNav = () => {
  return (
    <nav className="w-full flex justify-between items-center font-medium">
      <h1 className=" text-[32px]">TextMi</h1>
      <section className="text-white text-xl flex justify-center gap-4 items-center">
        <Link to={"/login"}>Login</Link>
        <Link
          to={"/signup"}
          className="bg-textmi-purple-base rounded-lg w-full max-w-[175px] min-h-[56px] py-4 px-[50px]"
        >
          Sign Up
        </Link>
      </section>
    </nav>
  );
};
