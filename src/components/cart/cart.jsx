import './cart.scss'
import { memo } from 'react'
import { Empty,Drawer } from 'antd'
 function CartComponent({openCart,onClose,totalItem}){
    return(
        <div>
             <Drawer title="Giỏ hàng" placement="right" onClose={onClose} open={openCart}>
                {totalItem?.length > 0?<div>Hello</div>:<Empty/>}
            </Drawer>
        </div>
    )
}
export default memo(CartComponent)