import { deleteBookMarkItem } from '@/api/bookmark'
import { useMutation } from '@tanstack/react-query'  

function useDeleteBookMarkMuation() {
  const deleteBookMarkItemMutation = useMutation({
    mutationFn: (bookmarkId: string) => deleteBookMarkItem(bookmarkId)
  })     
  return deleteBookMarkItemMutation    
}

export default useDeleteBookMarkMuation
