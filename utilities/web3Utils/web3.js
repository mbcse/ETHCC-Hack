import Web3 from 'web3'
import config from '../../config'
import Xdc3 from 'xdc3'

export const web3 = new Xdc3(config.NETWORK.ETH.RPC_API)
