import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const uri = process.env.NEXT_PUBLIC_THEGRAPHOUERYURL

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: uri,
})

function MyApp({ Component, pageProps }) {
    return (
        <div className="app">
            <Head> 
              
                    
                <title>Drug-Tracebility</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            
            </Head>
            
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
           
        </div>
    )
}

export default MyApp
