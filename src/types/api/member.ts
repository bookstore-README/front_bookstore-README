export interface Signup {
  nickname: string;
  email: string;
  password: string;
}

export interface Login {
  email?: string;
  password?: string;
}

export interface ChangePassword {
  newPassword: string;
}

export interface ChangeProfile {
  nickname: string;
  profileImage: File | null;
}

export interface Member {
  memberId: number;
  name: string | null;
  nickname: string;
  profileImage: string;
  email: string;
  password: string | null;
  address: string | null;
  deliveries: MemberDeliveryInfo[];
}
interface MemberDeliveryInfo {
  deliveryId: number;
  deliveryStatus: string;
  name: string;
  phone: string;
  address: string;
  message: string;
  paymentMethod: string;
  paymentAmount: number;
  memberId: number;
  nickname: string;
  email: string;
  socialId: number | null;
  orderDto: MemberDeliveryDto;
}

interface MemberDeliveryDto {
  orderId: number;
  orderBook: MemberDeliveryOrderBook;
  createDate: string;
  updateDate: string;
}

interface MemberDeliveryOrderBook {
  orderBookId: number;
  bookId: number;
  bookTitle: string;
  authors: string;
  bookImgUrl: string;
  price: number;
  quantity: number;
}
