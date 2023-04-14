import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  // in chrome devtools. you can see that the paltforms listed under parent platforms are not platforms objects
}

const useGames = () => useData<Game>('/games')

export default useGames;
