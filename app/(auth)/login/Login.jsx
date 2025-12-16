import React, { useEffect, useState } from "react";

function Login() {
  const [nicknameVal, setNicknameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [isLoginIncorrect, setIsLoginIncorrect] = useState(false);
  const loginInfo = [{ nickname: "test" }, { password: "test" }];

  function getNicknameInfo(e) {
    const { value } = e.target;
    setNicknameVal(value);
  }

  function getPasswordInfo(e) {
    const { value } = e.target;
    setPasswordVal(value);
  }

  function checkLoginInfo() {
    if (
      (nicknameVal !== loginInfo[0].nickname ||
        passwordVal !== loginInfo[1].password) &&
      nicknameVal !== "" &&
      passwordVal !== ""
    ) {
      setIsLoginIncorrect(true);
    } else setIsLoginIncorrect(false);
  }

  return (
    <div className="flex flex-col items-center gap-8 p-2 w-50">
      <div className="text-3xl font-semibold text-center w-full">Login</div>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          Username
          <input
            name="nickname"
            type="text"
            required
            autoComplete="off"
            onChange={getNicknameInfo}
            className="border border-[#998bb1] focus:outline-none px-2 py-1 text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          Password
          <input
            name="password"
            type="password"
            required
            autoComplete="off"
            onChange={getPasswordInfo}
            className="border border-[#998bb1] focus:outline-none px-2 py-1 text-sm"
          />
        </label>
      </div>
      <div className="flex">
        {isLoginIncorrect && (
          <div className="text-sm text-rose-600">
            Incorrect username or password entered
          </div>
        )}
      </div>
      <button
        type="submit"
        onClick={checkLoginInfo}
        className="flex justify-center bg-(--clr-logo) text-(--clr-background) w-full py-2 cursor-pointer rounded-[4px]"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
