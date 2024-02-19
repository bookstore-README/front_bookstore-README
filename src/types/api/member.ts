export interface Signup {
  name: string;
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
