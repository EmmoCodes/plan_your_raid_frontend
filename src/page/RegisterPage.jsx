function RegisterPage() {
  const register = async e => {}

  return (
    <main className="bg-darkgreen text-white justify-center h-screen flex items-center flex-col">
      <form className=" w-4/12 flex flex-col gap-5" onSubmit={register}>
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
          value="Register"
        />
      </form>
      <a className="text-highlight hover:underline mt-5 text-sm" href="/login">
        Already have an account? Login here!
      </a>
    </main>
  )
}

export default RegisterPage
