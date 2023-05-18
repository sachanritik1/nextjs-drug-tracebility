import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <div id="header">
            <div class="container">
       <nav>
        <div class="header-text">
            <h1 >Drug Tracing using BlockChain</h1>
            
            </div >
             <Link href="/">
                    <a ><h2>Home</h2></a>
                </Link>
                <Link href="/Manufacturer">
                    <a ><h2>Manufacturer</h2></a>
                </Link>
                <Link href="/Distributor">
                    <a ><h2>Distributor</h2></a>
                </Link>
                <Link href="/Pharmacy">
                    <a ><h2>Pharmacy</h2></a>
                </Link>
                <Link href="/Patient">
                    <a ><h2>Patient</h2></a>
                </Link>
           <ConnectButton moralisAuth={false} />
                
            
        </nav>
        </div>
        </div>
     



    )
}
