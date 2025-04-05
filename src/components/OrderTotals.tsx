import { useMemo } from "react"
import { OrderItem as OrderItemT } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItemT[]
}

export const OrderTotals = ({order}: OrderTotalsProps) => {

    const subtotalAmount = useMemo(()=> order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

  return (
    <>
        <div className="space-y">
            <h2 className="font-black text-2xl">Totales y propina</h2>
            <p>Subtotal a apagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">$0</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">$0</span>
            </p>
        </div>

        <button></button>
    </>
  )
}
