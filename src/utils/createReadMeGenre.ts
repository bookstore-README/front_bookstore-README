export interface CrateGenreProps {
  categoryId:number,
  title: string;
  selected: boolean;
}    
export const createReadMeGenre = (
  categoryId:number,
  title: string,
  selected: boolean = false,
): CrateGenreProps => ({ categoryId,title, selected });
