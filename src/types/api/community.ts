export interface CommunityCard {
  id: number; //커뮤니티글 번호
  updatedAt: string;
  writer: {
    userId: string;
    nickname: string;
    profileImg: string;
  };
  bookId: number; // 커뮤니티 글을 보다가 책이미지를 클릭하면 해당 링크를 받아오기 위해 필요
  bookImgUrl: string;
  bookTitle: string;
  content: string; // 커뮤니티 글 내용
}

export interface GetCommunityParams {
  cursorId?: number;
  limit?: number;
}

export interface GetCommunityOption {
  endpoint?: number;
  memberId?: number;
  params?: GetCommunityParams;
}

export interface PostCommunityData {
  required?: string | number | boolean;
  optional?: string | number
  id?: number;
  content?: any;
}

export interface PutCommunityOption {
  option?: number;
  required?: number;
  id?: number;
  content?: string;
}

export interface CommunityCardsProps {
  bookInfo: CommunityCardBookInfo;
  communityId: number;
  content: string;
  createDate: string;
  updateDate: string;
  emojiInfo: CommunityEmojiInfo;
  writer: CommunityWriter;
  kebab?: boolean;
}

export interface CommunityPagesProps {
  cards: CommunityCardsProps[];
  cursorId: number;
  limit: number;
  total: number;
}

export interface CommunityCardProps {
  communityId: number;
  profileImg: string;
  userNickname: string;
  createAt: string;
  bookId: number;
  bookCover: string;
  bookTitle: string;
  review: string;
  emojiInfo: CommunityEmojiInfo;
  writer: CommunityWriter;
  kebab?: boolean;
  profile?: boolean;
  memberId?: number;
}

interface CommunityCardBookInfo {
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
}

export interface CommunityEmojiInfo {
  emojiId: number;
  emojis: Emojis[];
}

interface Emojis {
  emojiNum: number;
  emojiType: string;
  memberCheck: boolean;
}

interface CommunityWriter {
  memberId: number;
  nickname: string;
  profileImg: string;
}
