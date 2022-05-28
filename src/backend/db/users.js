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
    profilePicture: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ugzu90pdvdk6tb3byqg4.png",
    followers: [],
    following: [],
  },
];
