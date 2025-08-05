import React from "react";
import { FaHandHoldingHand } from "react-icons/fa6";

function Login() {
  return (
    <div className="min-h-[41.6rem] flex justify-center items-center">
      <form className="fieldset bg-secondary border-primary rounded-3xl w-sm border p-8 h-[25rem]">
        <div className="flex justify-center items-center gap-2">
          <FaHandHoldingHand className="size-9 p-2 bg-muted rounded-full" />
          <p className="text-center text-4xl font-cherry">LilHelp</p>
        </div>
        <div className="flex justify-center items-center w-full mt-2">
          <p className="text-center font-medium font-poppins mb-2 text-neutral w-2xs">
            Log In To stay connected with us.your small donations can make huge
            difference.
          </p>
        </div>

        <label className="text-neutral font-poppins text-sm font-medium mt-2">
          Email
        </label>
        <input
          type="email"
          className="input rounded-full bg-background border-2 border-primary w-full"
          placeholder="Email"
        />

        <label className="text-neutral font-poppins text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          className="input rounded-full bg-background border-2 border-primary w-full"
          placeholder="Password"
        />

        <button className="px-12 py-3 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-102 hover:bg-[#21e064] transition-all duration-200 mt-4 mb-2">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
