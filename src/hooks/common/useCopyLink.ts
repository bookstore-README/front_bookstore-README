/** 현재 link url을 복사해서 클립보드에 붙여넣는 훅
 * 나중에 커뮤니티 글이나 댓글 link를 복사할 때도 쓰일 걸 생각해서 훅으로 분리함.
*/

import { notify } from '@/components/toast/toast';

function useCopyLink() {
  const copyURL = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window && window.location.href)
        .then(() => {
          notify({
            type: 'success',
            text: '링크를 복사했어요. ⭐️',
          });
        })
        .catch(() => {
          notify({
            type: 'error',
             text: '앗! 다시 시도해주세요. 🥲',
          });
        });
      }
  };

  return { copyURL };
}

export default useCopyLink;