import detectEthereumProvider from '@metamask/detect-provider';

export interface IAccount  {
    address: string
    network: "Etherum" | "Solana"
}
export interface INetWork {
    connect(): Promise<any>
    logOut() : void
    getCurrentAccount(): IAccount
    setCurrentAccount(account: IAccount): void
}

export class EtherumNetwork {
    account: IAccount 
    async connect(): Promise<any> {
         if (typeof window?.ethereum !== 'undefined') {
            const accounts = await window?.ethereum?.request({ method: 'eth_requestAccounts' });
            this.account = {address:  accounts[0], network: "Etherum"}
            localStorage.setItem("account", JSON.stringify(this.account))
            return Promise.resolve(0)
        } else {
            return Promise.reject("Please install MetaMask")
        }
    }
    logOut() {
    }

    getCurrentAccount(): IAccount {
        return this.account
    }

    setCurrentAccount(account: IAccount): void {
        this.account = account
    }
}


export class NetWorkAdpater implements INetWork {
    instance: INetWork
    constructor(network: INetWork) {
        this.instance = network
    }
    connect(): Promise<any> {
        return this.instance.connect()
    }
    logOut(): void {
        
    }
    getCurrentAccount(): IAccount {
        return this.instance.getCurrentAccount()
    }
    setCurrentAccount(account: IAccount): void {
        this.instance.setCurrentAccount(account)
    }
}

