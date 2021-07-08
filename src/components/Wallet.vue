<template>
 <button v-on:click="metaMaskConnect"><img src="https://raw.githubusercontent.com/MetaMask/brand-resources/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox-wordmark-horizontal.svg" class="walletImg"></button>
 <br><br> <button><img src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/d45b64841c7c5251183a4f2495ed1954fcf8401b/svg/walletconnect-logo.svg" class="walletImg"></button>

</template>

<script>
import { ref, onMounted } from "vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
//  Create WalletConnect Provider
const provider = new WalletConnectProvider(
  {
    rpc: 
    {
      1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      56: "https://bsc-dataseed.binance.org/",
      97: "https://data-seed-prebsc-1-s1.binance.org:8545"
    },
  });

//  Create Web3 instance
    const web3 = new Web3(provider);
  export default {
    props:['message'],
    data () {
    return {
     wallet_text: "Connect",
     crypto_address: "xxxxxxxxxx",
     crypto_network: "xx",
     crypto_balance: "xxxxxxx",
    }
  },
  methods: 
   {
     walletConnect: function(event)
     {
      provider.enable();
     },
     checkWallet: function(event)
    {
       if (typeof window.ethereum !== 'undefined') 
          {
            console.log('MetaMask is installed!');
            if(window.ethereum.isMetaMask == true && window.ethereum.selectedAddress != null) //check if already connected to metamask
            {
              this.metaWalletDetails();   
              this.wallet_text='Connected';   
              //return true;     
            }
            else
            {
              console.log('Metamask is installed but not logged in');
              //return false;
            }
          }
          else
          {
           
              alert('Please enable metamask extension. ');
              window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en');
              //return false;
          }
          
    },
     metaMaskConnect: function(event)
    {
        
          if (typeof window.ethereum !== 'undefined') 
          {
            console.log('MetaMask is installed!');
            if(window.ethereum.isMetaMask == true && window.ethereum.selectedAddress != null) //check if already connected to metamask
            {
              this.metaWalletDetails();   
              this.wallet_text='Connected';        
            }
            else
            {
              window.ethereum.enable(); //open metamask window
              // this.metaWalletDetails(); //get wallet details
              if(this.wallet_text != 'Connected')
              {
                this.addArenaToken(); //add custom token
              }
              
            }
                       
            // console.log(window.ethereum);

          window.ethereum.on('accountsChanged', function (accounts) 
          {
            // Time to reload your interface with accounts[0]!
            console.log('account changed');
            this.wallet_text='Connected';
            // this.metaWalletDetails();
          })  

          window.ethereum.on('chainChanged', function (networkId) 
          {
            // Time to reload your interface with the new networkId
            console.log('network changed');
          })

          window.ethereum.on('disconnect', function (networkId) 
          {
            // Time to reload your interface with the new networkId
            console.log('disconnected');
          })

          }
          else 
          {
            alert('Please install MetaMask extension!');
          }
          
    },
    metaWalletDetails: function(event)
    {
      console.log('network version: '+window.ethereum.networkVersion);
              console.log('address: '+window.ethereum.selectedAddress); //current wallet address
              console.log('is connected: '+window.ethereum.isMetaMask); //check if metamask is connected
              console.log('balance: ');
              web3.eth.getBalance("0x42316d2Ec13d9D633AaBc54996Cd66b6C56a59d8").then(console.log); //get balance
              // this.wallet_text='Connected'; 

              this.crypto_address = window.ethereum.selectedAddress;
              this.crypto_network = window.ethereum.networkVersion;
              this.crypto_balance = web3.eth.getBalance("0x42316d2Ec13d9D633AaBc54996Cd66b6C56a59d8").then(console.log);
    },
    addArenaToken: function(event)
    {
      /* code to add website token to user wallet */
            const tokenAddress = '0x42316d2Ec13d9D633AaBc54996Cd66b6C56a59d8';
            const tokenSymbol = '$ARENA ';
            const tokenDecimals = 9;
            const tokenImage = 'https://arenacoin.gg/favicon-32x32.png';

            try {
              // wasAdded is a boolean. Like any RPC method, an error may be thrown.
              const wasAdded = window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                  type: 'ERC20', // Initially only supports ERC20, but eventually more!
                  options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                  },
                },
              });

              if (wasAdded) {
                console.log('Thanks for your interest!');
              } else {
                console.log('Your loss!');
              }
            } catch (error) {
              console.log(error);
            }
              /* //code to add website token to user wallet */
    }
   },
   mounted: function mounted (data) 
   {
    this.checkWallet();
   }
}

</script>
<style scoped>
.walletImg
{
  width: 150px;
  height: 50px;
}
</style>