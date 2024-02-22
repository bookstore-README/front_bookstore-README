export type DeliveryItem = {
  deliveryId: number;
  deliveryStatus: keyof OrderOverViewItem;
  name: string;
  phone: string;
  address: string;
  message: string;
  paymentMethod: string;
  paymentAmount: number;
  memberId: number;
  nickname: string;
  email: string;
  socialId: any;
  orderDto: any;
};

export type OrderOverViewItem = {
  '배송 준비중': number;
  배송중: number;
  배송완료: number;
  '교환/환불': number;
  구매확정: number;
};
