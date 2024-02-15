import { deleteBasketItem } from '@/api/cart'
import { useMutation } from '@tanstack/react-query'

function useDeleteBasketQuery() {  
   const deleteBasketItemMutation = useMutation({
    mutationFn: (basketItemId: string) => deleteBasketItem(basketItemId)      
  })      
  return deleteBasketItemMutation
}

export default useDeleteBasketQuery
