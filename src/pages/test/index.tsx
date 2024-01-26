import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <DropDown />
      <PreviewBookInfo
        title="어머 이책 사야해!"
        authorList={['이승연']}
        size="sm"
        ranking={1}
      />
    </div>
  );
}

export default TestPage;
