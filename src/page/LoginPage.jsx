import { Link } from 'react-router-dom'

function LoginPage() {
  const login = async e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      body: form,
    })
    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem('token', token)
    }
  }

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
      <Link className="text-highlight hover:underline mt-5 text-sm" to="/register">
        Need an account? Register here!
      </Link>
    </main>
  )
}

export default LoginPage
