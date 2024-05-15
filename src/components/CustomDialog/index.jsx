import * as RadixDialog from '@radix-ui/react-dialog'

import { Receipt, X } from '@phosphor-icons/react'

import { api } from '../../services/api'

import {
  ViewOrders,
  Order,
  DialogOverlay,
  DialogContent,
  AllOrders,
  DialogTitle,
  DialogClose,
  DialogFinalizeOrders,
} from './styles.js'

export function CustomDialog({
  title,
  orders,
  ondeleteOrder,
  onFinalizeOrders,
}) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <ViewOrders>
          <Receipt />
          <p>
            {title} ({orders.length})
          </p>
          <span>{orders.length}</span>
        </ViewOrders>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Pedidos</DialogTitle>
          <AllOrders>
            {orders.length === 0 && <p>Nenhum pedido encontrado</p>}
            {orders.map(order => (
              <Order key={`${order.id}-${order.image_url}`}>
                <img
                  src={`${api.defaults.baseURL}/files/${order.image_url}`}
                  alt=""
                />
                <div>
                  <p>
                    {order.quantity} x {order.name}{' '}
                    <span>R$ {order.price}</span>
                  </p>
                  <button onClick={() => ondeleteOrder(order.id)}>
                    Excluir
                  </button>
                </div>
              </Order>
            ))}
          </AllOrders>
          {orders.length > 0 && (
            <DialogFinalizeOrders onClick={onFinalizeOrders}>
              Finalizar Pedidos
            </DialogFinalizeOrders>
          )}
          <DialogClose>
            <X />
          </DialogClose>
        </DialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
