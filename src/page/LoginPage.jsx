function LoginPage() {
  const login = async e => {}

  return (
    <main className="bg-darkgreen text-white justify-center h-screen flex items-center flex-col">
      <form className=" w-4/12 flex flex-col gap-5" onSubmit={login}>
        <div className="flex flex-col ">
          <label htmlFor="email">Email</label>
          <input className="text-black" type="text" name="email" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="password">Password</label>
          <input className="text-black" type="password" name="password" />
        </div>
        <input
          className=" cursor-pointer border-2 rounded-2xl w-52 ml-auto mr-auto hover:bg-highlight"
          type="submit"
          value="Let's raid"
        />
      </form>
      <a className="text-highlight hover:underline mt-5 text-sm" href="/register">
        Need an account? Register here!
      </a>
    </main>
  )
}

export default LoginPage
