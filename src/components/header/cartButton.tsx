import Image from 'next/image';
import IconCart from '@/public/icons/CartIcon.svg'
import Link from 'next/link';
interface CardChipProps {
  numItemsOfCart: number;
}

function CartButton({ numItemsOfCart }: CardChipProps) {
  return (
    <button className="relative inline-block">
      <Link href="/cart" />
      <div className='w-16 h-16 pc:w-24 pc:h-24 tablet:h-24 tablet:w-24'>
        <Image src={IconCart} alt="장바구니 이미지" fill />
      </div>
      {numItemsOfCart && (
        <div className="absolute bottom-8 pc:bottom-11 tablet:bottom-11 left-12 tablet:left-17 pc:left-17 bg-green text-white rounded-full p-1 text-10 pc:text-12 w-12 h-12 tablet:w-16 tablet:h-16 pc:w-16 pc:h-16 flex items-center justify-center tablet:text-14">
          {numItemsOfCart}
        </div>
      )}
    </button>
  );
}

export default CartButton;
