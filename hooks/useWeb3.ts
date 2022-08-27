import { } from "web3"


export function useWeb3() {
    const connectEtherum = () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');            
        } else {
            console.log("not install")
        }
    }
    return {
        connectEtherum
    }
}