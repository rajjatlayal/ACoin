<template>
    
    <div class="wrapper" :key="renderKey">
    <div class="container">
            <h1 class="title">Last 8 Transactions of $ARENA on BSC {{renderKey2}}</h1>
            <table class="tx table table-striped">
                
                <tr>
                    <th>Token</th>
                    <th>Tx Hash</th>
                    <th>Amount(USD)</th>
                    <th>Amount(BNB)</th>
                    <th>Time</th>
                </tr>
                <!-- <tbody> -->
                <tr v-for="(item, index) in txH" :key="index">
                    <td>
                        {{item.baseAmount}}<br>
                        {{ item.baseCurrency.symbol}}
                    </td>
                    <td>
                        <a :href="'https://bscscan.com/tx/'+item.transaction.hash" target="_blank">
                        {{item.transaction.hash.substring(0,30)+"..."}}
                        </a>
                    </td>
                    <td>{{item.qAmUsd}}</td>
                    <td>{{item.qAm}}</td>
                    <td>{{item.block.timestamp.time }}</td>
                </tr>
            </table>
<br><br><hr>
            <!-- token holders -->
          <h1 class="title">Holders of $Arena {{renderKey}}</h1>
            <table class="tx table table-striped">
                
                <tr>
                    <th>Holder Address</th>
                    <th>Holder Balance</th>
                    <th>Contract Name</th>
                    <th>Contract Address</th>                  
                </tr>
                <!-- <tbody> -->
                <tr v-for="(item, index) in holders" :key="index">
                    <td>
                        <a :href="'https://bscscan.com/token/0xcae755389bee1b066f4713f3909983b48161ae2e?a='+item.address" target="_blank">
                        {{ item.address.substring(0,20)+"..." }}
                        </a>
                    </td>
                    <td>{{item.balance}}</td>
                    <td>{{item.contract_name}}</td>
                    <td>
                        <a :href="'https://bscscan.com/token/'+item.contract_address" target="_blank">
                        {{item.contract_address.substring(0,30)+"..."}}
                        </a>
                    </td>
                    
                    
                </tr>
            </table>
            <!-- //token holders -->
        </div>
        </div>
   
        <!-- <ul>
            <li v-for="(item, index) in txH" :key="index">hello here{{item.address.address}} </li>
        </ul> -->
</template>

<script>
    import axios from "axios";
    // import { print } from 'graphql';
    // import gql from 'graphql-tag';
    
    export default {
        name: "DataTable",
        data() {
            return {
                txH:[],
                holders: [],
                interval: null,
                interval2: null,
                renderKey: 0,
                renderKey2: 1,
                connection: null
            };
        },
        created: function() 
        {
          this.interval2 = setInterval(this.getHolders, 10000); //call after every 10 seconds
          this.interval = setInterval(this.apiCall, 1000); //call after every 1 seconds
// URL connection
    // const trades = new WebSocket("wss://dex.binance.org/api/ws/BTCB-1DE@trades");
    //     console.log(trades);      
        },
        beforeUnmount() 
        {
          clearInterval(this.interval);
          clearInterval(this.interval2);
        },
       methods: 
       {
    //      forceRerender() {
    //   this.renderKey += 1;
    //   return this.renderKey;
    // },
         getHolders: function(event)
         {
           var apiUrl = 'https://api.covalenthq.com/v1/56/tokens/0xcae755389bee1b066f4713f3909983b48161ae2e/token_holders/?key=ckey_9a15e6ad31c94fae867254af7be&limit=10';
           

            axios
.get(apiUrl)
.then((response) => 
{
    this.holders = response.data.data.items;
    return this.holders;
                // console.log(response.data.data.items);
}
)
.catch(err => console.log(err));
          //  const that = this;
           // Make a request for a user with a given ID
            // axios.get(apiUrl)
            //   .then(function (response) {
            //     // handle success
            //     this.holders = response.data.data.items;
            //     console.log(response.data.data.items);
            //   })
            //   .catch(function (error) {
            //     // handle error
            //     console.log(error);
            //   })
            //   .then(function () {
            //     // always executed
            //   });
         },
           apiCall: function(event)
           {
               axios
.post('https://graphql.bitquery.io/', {
  query: `
  {
  ethereum(network: bsc) {
    dexTrades(
      baseCurrency: {is: "0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3"}
      quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      options: {desc: ["block.timestamp.time"], limit: 8}
    ) {
      block {
        height
        timestamp { 
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        index
        hash
      }
      baseCurrency {
        symbol
      }
      quoteCurrency {
        symbol
      }
      quotePrice
      baseAmount
      qAm:quoteAmount
      qAmUsd: quoteAmount(in: USD)
      
    }
  }
}

  `,
})
.then((res) => 
{
    // this.txH = res.data.data.ethereum.smartContractCalls;
    // console.log(res.data.data.ethereum.transfers[0].amount+' I am here');
    this.txH = res.data.data.ethereum.dexTrades;
    // console.log(this.txH);
    // location.reload();
    // console.log('reloaded');
    return this.txH;
    
    }
)
.catch(err => console.log(err));
           },
           //new websocket code
       webSocTest: function(event)
       {
//         var data = JSON.stringify({
//   "jsonrpc": "2.0",
//   "method": "eth_hashrate",
//   "params": [],
//   "id": 64
// });

// var config = {
//   method: 'post',
//   url: 'https://bsc-dataseed.binance.org/',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
console.log('called');

       }


       },
     beforeMount() {
       this.webSocTest();
            this.apiCall();
            this.getHolders();
        },
        watch:{
          holders: function(val, oldVal)
          {
            this.renderKey += 1;
            console.log('renderkey: '+this.renderKey);
            // let entries = Object.entries(val);
            // let oldEntries = Object.entries(oldVal);
            // console.log('new: '+ entries);
            // console.log('old: '+ oldEntries);
          },
          txH: function(val, oldVal)
          {
            // console.log(Object.keys(val));
            // let entries = Object.entries(val);
            // let oldEntries = Object.entries(oldVal);
            // console.log('newtx: '+ entries);
            // console.log('oldtx: '+ oldEntries);
            this.renderKey2 += 1;
            console.log('renderkey2: '+this.renderKey2);
          }
        },
		// mounted()
		// {
	// 		window.setInterval(() => {
  //   this.apiCall();
	// this.getHolders();
	// console.log('called after 30 seconds');
  // console.log(this.ref);
  // this.forceRerender(); //re render component view to reflect the changes
  // console.log(this.renderKey);
  // }, 30000)
		// },
        setup() {
    return {};
  }
    }
</script>

<style lang="scss" scoped>
.tx
{
    background: #ffffff;
    color: #12161c;
    /* display: block; */
    width:100%;
}
.tx tr th,.tx tr td
{
    border-bottom: 1px solid #000000;
    vertical-align: middle;
    text-align:center;
    padding: 15px;
    @media (max-width: $tablet-max) {
    width: 95%;
    display: inline-block;
  }
}
.tx tr th
{
    font-weight: bold;
    background: #d7dbdf;
}
.tx tr td
{
    /* font-size:16px; */
    color: #6c757e;
    background-color: #f8fafd;
    border-color: #e7eaf3;
}
.title {
  font-weight: bold;
  font-size: 36px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 16px;
  padding: 15px;
  @media (max-width: $tablet-max) {
    margin: 0 auto;
    text-align: center;
    font-size: 25px;
  }
}
</style>