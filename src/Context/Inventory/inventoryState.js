import InventoryContext from "./inventoryContext";
import { useState, useEffect } from "react";

const InventoryState = (props) => {


  const [inventory,setInventory] = useState([])
  useEffect(async()=>{
      const apiData = await fetch("https://fakestoreapi.com/products")
      setInventory(await apiData.json())
  },[])


    return(
        <InventoryContext.Provider value = {[inventory]}>
            {props.children}
        </InventoryContext.Provider>
    )
}

export default InventoryState