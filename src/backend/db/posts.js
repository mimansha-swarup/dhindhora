import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "If you want to know who you are, you have to look at your real self and acknowledge what you see.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "slayer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      // TODO: commenting out for future refference
      // {
      //   _id: uuid(),
      //   username: "shubhamsoni",
      //   text: "Interesting",
      //   votes: {
      //     upvotedBy: [],
      //     downvotedBy: [],
      //   },
      // },
    ],
  },
  {
    _id: uuid(),
    content:
      "People’s lives don’t end when they die, it ends when they lose faith.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "slayer",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Wherever someone thinks of you, that's where home is.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "toad_sage",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "In the ninja world, those who break the rules are scum, that's true, but those who abandon their friends are worse than scum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "copy_ninja",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I realized that back then, the reason I wanted to become human, was that I really just wanted to have friends. Now, I just want to be a monster that can help Luffy.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "raccoon",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just Believe In Yourself, And You Can Become A Hero!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "all_might",

    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
