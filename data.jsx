import icon1 from "./public/icon-1.png";
import icon2 from "./public/icon-2.png";
import icon3 from "./public/icon-3.png";
import groceryIcon from './public/grocery-icon.png'
import WorkIcon from './public/work-icon.png'
import SportIcon from './public/sport-icon.png'
import DesignIcon from './public/design-icon.png'
import UniversityIcon from './public/university-icon.png'
import SocialIcon from './public/social-icon.png'
import MusicIcon from './public/music-icon.png'
import HeartIcon from './public/heart-icon.png'
import MovieIcon from './public/movie-icon.png'
import CreateNewIcon from './public/create-new-icon.png'
import HomeIcon from './public/home-icon.png'

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
  { icon: groceryIcon.src, categoryText: 'Grocery', color: "#CCFF80" },
  { icon: WorkIcon.src, categoryText: 'Work', color: "#FF9680" },
  { icon: SportIcon.src, categoryText: 'Sport', color: "#80FFFF" },
  { icon: DesignIcon.src, categoryText: 'Design', color: "#80FFD9" },
  { icon: UniversityIcon.src, categoryText: 'University', color: "#809CFF" },
  { icon: SocialIcon.src, categoryText: 'Social', color: "#FF80EB" },
  { icon: MusicIcon.src, categoryText: 'Music', color: "#FC80FF" },
  { icon: HeartIcon.src, categoryText: 'Health', color: "#FC80FF" },
  { icon: MovieIcon.src, categoryText: 'Movie', color: "#80D1FF" },
  { icon: HomeIcon.src, categoryText: 'Home', color: "#FFCC80" },
  { icon: CreateNewIcon.src, categoryText: 'Create New', color: "#80FFD1" },
];
