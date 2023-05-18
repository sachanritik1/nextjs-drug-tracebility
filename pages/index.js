import { useWeb3Contract, useMoralis } from "react-moralis"
import supplyChainAbi from "../constants/SupplyChain.json"
import networkMapping from "../constants/networkMapping.json"

export default function Home() {
    const { isWeb3Enabled, chainId, account } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : "31337"
    const supplyChainAddress = chainId ? networkMapping[chainString].SupplyChain[0] : null
    const { runContractFunction } = useWeb3Contract()
    console.log(account)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl"></h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled ? (
                    <div><h3>web3 is enabled</h3></div>
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
