import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from "next-auth/providers/linkedin"

const dotenv = require('dotenv').config()

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET
          })
    ],
    pages:{
        signIn: '/auth/signin',
    }
})