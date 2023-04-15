import useData from "./useData";
import { Platform } from "./useGames";

  // in chrome devtools. you can see that the paltforms listed under parent platforms are not platforms objects

const usePlatforms = () =>
  useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
