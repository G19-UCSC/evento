
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import { BsGithub, BsTwitter, BsGoogle } from 'react-icons/bs'


const providers = [
  {
    name: 'github',
    Icon: BsGithub,
  },
  {
    name: 'linkedIn',
    Icon: BsTwitter,
  },
  {
    name: 'google',
    Icon: BsGoogle,
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
    <div>
      <form class="form-floating">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
          <label for="floatingInput">Email address</label>
        </div>
        <button type="button" className="btn btn-primary">Login</button>
      </form>
        <div className='center'>
          {providers.map(({ name, Icon }) => (
           <button type="button" className="btn btn-primary" key={name} leftIcon={<Icon />} onClick={handleOAuthSignIn(name)}>Sign in with {name}</button>
          ))}
        </div>
    </div>
  )
}
export default Signin