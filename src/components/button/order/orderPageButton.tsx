import React from 'react';

type orderButtonProps = {
  onClick: () => void;
};

function ConFirmButton({ onClick }: orderButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex-center h-40 w-130 rounded-md border-2 border-primary bg-primary text-white
            mobile:w-full">
      구매확정
    </button>
  );
}

function ExchangeRefundButton({ onClick }: orderButtonProps) {
  return (
    <button
      className="flex-center h-40 w-130 rounded-md border-2 border-primary bg-white text-primary
          mobile:w-full"
      onClick={onClick}>
      교환/환불
    </button>
  );
}

function ReviewButton({ onClick }: orderButtonProps) {
  return (
    <button
      className="flex-center h-40 w-130 rounded-md border-2 border-primary bg-primary text-white
            mobile:w-full"
      onClick={onClick}>
      리뷰쓰기
    </button>
  );
}

export { ConFirmButton, ExchangeRefundButton, ReviewButton };
