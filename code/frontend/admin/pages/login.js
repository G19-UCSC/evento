import React, { useState } from 'react'
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";
import { useSession, signOut, signIn } from 'next-auth/react'
// import styles from '../../styles/sb-admin-2.css'
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
  

const login = () => {
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
        // <div>
        //     {session ? (
        //         <>
        //             <h1>you are signed in as {session.user.email}</h1>
        //             <button type="button" className="btn btn-primary" onClick={handleSignOut} >Sign out</button>
        //         </>
        //     ) : (
        //         <>
        //             <h1>you are not signed in</h1>
        //             <button type="button" className="btn btn-primary" onClick={handleSignIn} >Sign in</button>
        //         </>
        //     )
        //     }
        // </div>
        // Outer Row
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" for="customCheck" >Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr />
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="register.html">Create an Account!</a>
                                    </div>
                                    <div className='center'>
                                    {providers.map(({ name, Icon }) => (
                                    <button type="button" className="btn btn-primary" key={name} leftIcon={<Icon />} onClick={handleOAuthSignIn(name)}>Sign in with {name}</button>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default login