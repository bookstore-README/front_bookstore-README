import ActionButton from '@/components/button/actionButton';

interface MobileBookOverViewCardProps {
  basketOnClick: () => void;
  buyOnClick: () => void;
  disabled: boolean;
}

function MobileBookOverViewCard({
  basketOnClick,
  buyOnClick,
  disabled,
}: MobileBookOverViewCardProps) {
  return (
    <div role="mobile-section" className="pt-10 tablet:hidden pc:hidden">
      <div className="border-b-1 absolute bottom-70 left-0 w-328 border border-gray-1"></div>
      <div role="mobile-cart-button" className="flex gap-10">
        <ActionButton
          label="장바구니"
          variant="primary"
          mobile
          onClick={basketOnClick}
          disabled={disabled}
        />
        <ActionButton
          label="구매하기"
          variant="secondary"
          mobile
          onClick={buyOnClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
export default MobileBookOverViewCard;
