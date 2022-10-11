import Web3 from "web3"

import detectEthereumProvider from '@metamask/detect-provider';

let web3
let provider

export function useWeb3() {
    const connectMetaMask = async () => {
        if (typeof window?.ethereum !== 'undefined') {
            const accounts = await window?.ethereum.request({ method: 'eth_requestAccounts' });
            return Promise.resolve(accounts)
        } else {
            return Promise.reject("Please install MetaMask")
        }
    }
    const getAccounts = async () => {
        const accounts = await connectMetaMask()
    }
    const init = async (callback) => {
        provider = await detectEthereumProvider();

        if (provider) {
            window.ethereum?.on("accountsChanged", accounts => {
                callback("accountsChanged", { accounts })
            })

        } else {
            callback("error", "Please install MetaMask")
        }

    }
    return {
        connectMetaMask,
        getAccounts,
        init
    }
}