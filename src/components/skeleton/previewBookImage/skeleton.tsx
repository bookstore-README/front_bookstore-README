import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/style/previewBookImageSize';

function SkeletonPreviewBookImage({ size }: PreviewBookInfoSizeProps) {
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
  };
  return (
    <div
      role="container"
      className={`flex animate-pulse flex-col border-2 border-gray-1 bg-gray-1 ${STYLE.img}`}></div>
  );
}

export default SkeletonPreviewBookImage;
