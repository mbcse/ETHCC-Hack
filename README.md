# Event-On-Chain
#Inspiration
Now a days as web3 is progressing and there is a demand for NFT's, a multichain event management and event nft ticketing platform is need of an hour. Its very difficult for organisers to issue NFT tickets as they have to use some minter tools to do so and also to issue poap they need to understand it and then issue separately. To solve all these issue eventonchain is built. The idea is a user can come on the platform and login with email or metamask. With just few clicks they can create events which will be stored on blockchain and people can mint tickets on the platform by paying fee in very easy to use manner. The organiser can checkIn users then and can issue poap in one go. The best part is organizers can choose which blockchain(Polygon or Gnosis or Cronos) to mint tickets so that the gas cost doesn't bother them. The UI is made so simple that switching of chains to buy multichain nfts is made so easy and seamless that user doesn't need to understand any technicalities of them.

#What it does
A user can come on platform and login with email or with his/her wallet. If he logins with only email and otp then we create a a multichain account for him. Then user can create events, mint ticket nfts , organizer can checkin user and user can burn tickets to get the value and buy new tickets with it. All the tickets have some value and they can showcase it to the world. There are many other feature like stripe and crypto wallet payment system. The amount of ticket is sent to smart contract and can be withdrawn only after event is ended. The organiser can choose blockchain of his/her choice for nft's.

#How we built it
The project is built using HTML/CSS/Javascript and Nodejs. The poap api's are used to issue poaps per event. IPFS-Pinata is used for all data, event pass and meta data storage. The contracts are deployed on GNOSIS, POLYGON, CRONOS network. MongoDB is used as database. A script is made which can checkin in one click and issue poaps, nfts in one go. HTML/CSS, BOOTSTRAP, Jquery is used for frontend. web3js library and etherjs is used to connect to multiple blockchains. Metamask is used as wallet and hardhat is used for deployment.

# Deployed Contract Address
- Polygon Testnet : 0xC69a53EBa1e1F9E2f1D08390ae05122185892B4F
- Gnosis Mainnet : 0x8F4a3263619a0Ab01c24799e1beEBe1851FF9209
- Cronos Testnet : 0xC69a53EBa1e1F9E2f1D08390ae05122185892B4F

#Challenges we ran into
- Blockchain and database sync-up
- Multichain support for platform. Implementing this was hard task 

#Accomplishments that we're proud of
I have almost completed my project which I was looking to build and put into the market. I think I am now close to launch it soon on these chains. Just need support from you all.

#What we learned
All about the different networks

#What's next for EventOnChain
Adding more functionalities like rsvp, transferable nfts, etc.

