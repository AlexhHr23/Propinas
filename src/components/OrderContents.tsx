import { OrderItem as OrderItemT } from "../types"

type OrderContentsProps ={
    order: OrderItemT[]
}


export const OrderContents = ({order} : OrderContentsProps) => {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 
            ?  <p>La orden está vacia</p>
            : (
                order.map(item => (
                    <div key={item.id}>
                        <p>
                            {item.name}
                        </p>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
