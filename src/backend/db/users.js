import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Itachi",
    lastName: "Uchiha",
    username: "slayer",
    password: "clankiller123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Anbu Captain and Akatsuki Member",
    website: "https://itachi.konoha",
    profilePicture:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ugzu90pdvdk6tb3byqg4.png",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Jiraiya",
    lastName: "Sensei",
    username: "toad_sage",
    password: "sage@106",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Master of Seventh Hokage | Legendary Sannin ",
    website: "",
    profilePicture:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/38orj0wnnx1tggvb7grf.png",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Kakashi",
    lastName: "Hatake",
    username: "copy_ninja",
    password: "ichax2",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hatake Kakashi of the leaf | Sharingan Wielder",
    website: "",
    profilePicture:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fygi9lotfqdd94owu42z.png",
    followers: [],
    following: [],
  },

  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Chopper",
    username: "Raccoon",
    password: "doctor@4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Straw Hat Pirate | Human-Human fruit user | Doctor",
    website: "",
    profilePicture:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tljpl42ldz5tji51gkdt.png",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Toshinori",
    lastName: "Yagi",
    username: "all_might",
    password: "Plus@ultra",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "One For All Quirk | Training Deku ",
    website: "",
    profilePicture:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yhn25h3e8u1mp2bn4qq3.png",
    followers: [],
    following: [],
  },
];
