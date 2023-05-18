import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">Drug Tracing using BlockChain</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/Manufacturer">
                    <a className="mr-4 p-6">Manufacturer</a>
                </Link>
                <Link href="/Distributor">
                    <a className="mr-4 p-6">Distributor</a>
                </Link>
                <Link href="/Pharmacy">
                    <a className="mr-4 p-6">Pharmacy</a>
                </Link>
                <Link href="/Patient">
                    <a className="mr-4 p-6">Patient</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
