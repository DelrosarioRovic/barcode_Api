
import '@shopify/shopify-api/adapters/node';
import bodyParser from 'body-parser';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import express from 'express';
import cors from "cors";
import connectToDatabase from "./connection.js";
import axios from 'axios';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
connectToDatabase();

 


  //search to arrayt
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === target) {
        return arr[i]
      }
    }
    return "No data exist";
}

 // getting data from shopify inventory 
  app.post('/products', async (req, res) => {
    const accessToken = "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";
    const url = "https://mynewstoretest01.myshopify.com/admin/api/2023-07/products.json";
    const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
    };
    

    const barcode = parseInt(req.body.search);

    axios.get(url, { headers })
    .then(response => {
        const search_Result = linearSearch(response.data.products, barcode)
        return res.status(200).json({
          product: search_Result
        })
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  });

  //** __*/


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})