import { getBasketList } from '@/api/cart'
import { useQuery } from '@tanstack/react-query'  

function useGetBasKetQuery() {
  const { data, isError, isLoading, isSuccess } =  useQuery({
   queryKey: ["getBasket"], 
   queryFn: () => getBasketList(),
   select: (data) => {
      return data?.data
    }
  })
 
    return {
        data, isError, isLoading, isSuccess
    }

}

export default useGetBasKetQuery
