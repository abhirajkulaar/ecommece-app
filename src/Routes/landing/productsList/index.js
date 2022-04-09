
import ProductCard from "../../../Components/productTile"
import InventoryContext from "../../../Context/Inventory/inventoryContext"
import {Grid} from '@mui/material'
import { useContext } from "react"
function ProductList()
{
    const [inventory,updateInventory] = useContext(InventoryContext)
    return (

        <Grid container spacing={4}>
        {inventory.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard price = {product.price} image={product.image} title={product.title} description={product.description} id={product.id} rating={product.rating}></ProductCard>
          </Grid>
        ))}
      </Grid>
    
    )
    
}


export default ProductList