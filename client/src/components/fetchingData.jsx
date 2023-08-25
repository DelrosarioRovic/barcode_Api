import axios from "axios";
import { useState, useEffect } from "react";
import Result from "./result";

const FetchData = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
    const BarcodeApi = async(event) => {
        event.preventDefault();
        try {
          const url = 'http://localhost:3000/products';
          const response = await axios.post(url, {
            search
          });
          console.log(response.data.product);
          const result = response.data.product;
          setData(result);
        } catch (error) {
          console.log(error);
        }
      }
      console.log(data);
      return (
        <div>
          <form onSubmit={BarcodeApi}>
            <input 
              type="text" 
              id="search" 
              value={search}    
              onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
          <Result 
            product = {data}
          />
        </div>
      )

    
}

export default FetchData;