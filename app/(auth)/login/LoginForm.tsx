function LoginForm({ error }: { error: string }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold text-center">Login</h1>
      <div className="flex flex-col gap-4 w-full">
        <label className="flex flex-col gap-2">
          Username
          <input
            name="username"
            type="text"
            required
            autoComplete="off"
            className="border border-[#998bb1] px-2 py-1 text-sm"
          />
        </label>
        <label className="flex flex-col gap-2">
          Password
          <input
            name="password"
            type="password"
            required
            autoComplete="off"
            className="border border-[#998bb1] px-2 py-1 text-sm"
          />
        </label>
      </div>
      <button
        type="submit"
        className="flex justify-center bg-(--clr-logo) text-(--clr-background) w-full py-2 cursor-pointer rounded"
      >
        Login
      </button>
      <div className="text-[#f70f0f]">{error}</div>
    </div>
  );
}

export default LoginForm;
