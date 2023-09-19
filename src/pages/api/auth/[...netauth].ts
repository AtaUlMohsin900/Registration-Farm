import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';


export const authOption ={
    providers: [
        GithubProvider({
            clientId:'50634aadf8ebb367bd39',
            clientSecret:'eb39c4327cb4764a1ca93c97be357965cb633600'
        })
    ]
}
export default NextAuth(authOption);