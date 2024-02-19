export interface EditProfileType {
  profileImage?: string | null;
  nickname?: string | null;
}

export interface EditProfileProps {
  initialProfileImageUrl?: string;
}

export interface EditPasswordType {
  password: string;
  checkPassword: string;
}
