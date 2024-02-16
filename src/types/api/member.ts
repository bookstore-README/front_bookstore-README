export interface Signup {
  name: string;
  nickname: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface ChangePassword {
  newPassword: string;
  token: string;
}

export interface ChangeImage {
  memberId: number;
  nickname: string;
  profileImage: string;
}
