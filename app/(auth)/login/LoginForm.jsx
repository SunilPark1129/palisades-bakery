function LoginForm() {
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
            className="border border-[#998bb1] focus:outline-none px-2 py-1 text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="flex justify-center bg-(--clr-logo) text-(--clr-background) w-full py-2 cursor-pointer rounded-[4px]"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
