import { useState } from "react"
import type { MenuItem as MenuItemT, OrderItem } from "../types"


export const  useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItemT) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            )

            setOrder(updatedOrder)

        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }


    }

    const removeItem = (id: MenuItemT['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        addItem,
        order,
        removeItem
    }
}