// import BookReviewCard from '@/components/bookReviewCard/bookReviewCard';
import DropDown from '@/components/dropDown/dropDown';
import PreviewBookInfo from '@/components/previewBookInfo/previewBookInfo';

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <DropDown />
      <PreviewBookInfo
        title="어마어마하게대단하고아름다운승연이가쓴흡입력장난아닌책(어머이건사야해!)"
        ranking={1}
        authorList={[
          '이승연',
          '팡이',
          '삐용이',
          '이름이엄청긴저자를만들어볼거예요',
        ]}
        maxWidth={180}
        maxHeight={291}
      />
      {/* <BookReviewCard /> */}
    </div>
  );
}

export default TestPage;
