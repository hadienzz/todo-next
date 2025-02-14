import icon1 from "./public/icon-1.png";
import icon2 from "./public/icon-2.png";
import icon3 from "./public/icon-3.png";
import GroceryIcon from "./components/icons/Category/GroceryIcon";
import WorkIcon from "./components/icons/Category/WorkIcon";
import SportIcon from "./components/icons/Category/SportIcon";
import DesignIcon from "./components/icons/Category/DesignIcon";
import UniversityIcon from "./components/icons/Category/UniversityIcon";
import SocialIcon from "./components/icons/Category/SocialIcon";
import MusicIcon from "./components/icons/Category/MusicIcon";
import HeartIcon from "./components/icons/Category/HeartIcon";
import MovieIcon from "./components/icons/Category/MovieIcon";
import HomeIcon from "./components/icons/HomeIcon";
import CreateNewIcon from "./components/icons/Category/CreateNewIcon";



export const CONTENTS = [
  {
    image: icon1.src,
    title: "Manage your tasks",
    description:
      "You can easily manage all of your daily tasks in DoMe for free",
    id: "c1",
  },
  {
    image: icon2.src,
    title: "Create daily routine",
    description:
      "In Uptodo  you can create your personalized routine to stay productive",
    id: "c2",
  },
  {
    image: icon3.src,
    title: "Organize your tasks",
    description:
      "You can organize your daily tasks by adding your tasks into separate categories",
    id: "c3",
  },
];

export const CATEGORIES_CONTENT = [
  { icon: <GroceryIcon />, categoryText: 'Grocery', color: "#CCFF80" },
  { icon: <WorkIcon />, categoryText: 'Work', color: "#FF9680" },
  { icon: <SportIcon />, categoryText: 'Sport', color: "#80FFFF" },
  { icon: <DesignIcon />, categoryText: 'Design', color: "#80FFD9" },
  { icon: <UniversityIcon />, categoryText: 'University', color: "#809CFF" },
  { icon: <SocialIcon />, categoryText: 'Social', color: "#FF80EB" },
  { icon: <MusicIcon />, categoryText: 'Music', color: "#FC80FF" },
  { icon: <HeartIcon />, categoryText: 'Health', color: "#FC80FF" },
  { icon: <MovieIcon />, categoryText: 'Movie', color: "#80D1FF" },
  { icon: <HomeIcon />, categoryText: 'Home', color: "#FFCC80" },
  { icon: <CreateNewIcon />, categoryText: 'Create New', color: "#80FFD1" },
];
