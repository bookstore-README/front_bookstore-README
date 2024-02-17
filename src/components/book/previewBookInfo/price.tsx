import { THOUSAND_UNIT } from 'src/constants/price';

interface BookPriceProps {
  price: number;
  isUnit?: boolean;
}

function BookPrice({ price, isUnit }: BookPriceProps) {
  return (
    <div className="mt-4 text-14 font-bold text-black">
      {price.toString().replace(THOUSAND_UNIT, ',')}
      {isUnit && '원'}
    </div>
  );
}

export default BookPrice;
