
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'


const providers = [
  {
    name: 'github',
    Icon: BsGithub, 
    color:'dark'
  },
  {
    name: 'linkedIn',
    Icon: BsTwitter,
    color:'primary'
  },
  {
    name: 'google',
    Icon: BsGoogle,
    color:'danger'
  },
]

const Signin = () => {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const [email, setEmail] = useState('')

  console.log(session)
  if (status === 'loading') return <h1>Checking Authentication...</h1>

  if (session) {
    setTimeout(() => {
      push('/')
    }, 5000)

    return <h1>you are already signed in</h1>
  }

  const handleOAuthSignIn = (provider) => () => signIn(provider)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) return false

    signIn('email', { email, redirect: false })
  }
  return (
    <div style={{ backgroundImage: `url(${"../images/login.jpg"})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
        <hr />
        <div className='d-grid gap-2 mt-3'>
          {providers.map(({ name, Icon, color }) => (
           <button type="button" className={`btn btn-${color}`} key={name} leftIcon={<Icon />} onClick={handleOAuthSignIn(name)}>Sign in with {name}</button>
          ))}
          
        </div>
      </div>
    </form>
  </div>
  </div>
  )
}
export default Signin