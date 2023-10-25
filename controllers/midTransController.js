const midtransClient = require('midtrans-client')
const { default: axios } = require("axios")

function handleMainRequest(req,res){
    // Create Snap API instance
    let snap = new midtransClient.Snap({
            // Set to true if you want Production Environment (accept real transaction).
            isProduction : false,
            serverKey : 'SB-Mid-server-u_Xr9queY4ceH4d-AiMsdwTN'
        });
    
    let parameter = {
        "transaction_details": {
            "order_id": new Date(),
            "gross_amount": 10000
        },
        "credit_card":{
            "secure" : true
        },
        "customer_details": {
            "first_name": "budi",
            "last_name": "pratama",
            "email": "budi.pra@example.com",
            "phone": "08111222333"
        }
    };
    
    snap.createTransaction(parameter)
        .then((transaction)=>{
            // transaction token
            let transactionToken = transaction.token;
            console.log('transactionToken:',transactionToken)
            res.status(201).json({token: transactionToken})
        })

}
module.exports = handleMainRequest
