import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { HomeLayout, Post } from "../component";

export const BookmarkPage = () => {
  const {
    post: { allPosts },
    bookmark: { bookmarkedPost },
  } = useSelector((state) => state);

  const getBookmarkedPost = () =>
    allPosts.filter((eachPost) => bookmarkedPost.includes(eachPost?._id));

  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">
        Bookmark
      </Typography>
      {}
      {bookmarkedPost.length >= 1 ? (
        getBookmarkedPost().map((eachPost) => (
          <Post key={eachPost._id} postInfo={eachPost} />
        ))
      ) : (
        <Stack
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" textAlign="start" mt={10} component="h4">
            Save Posts for later
          </Typography>
          <Typography
            variant="subtitle1"
            color={grey[500]}
            textAlign="start"
            mt={3}
            height="100%"
            component="p"
          >
            Bookmark Posts to easily find them again in the future.
          </Typography>
        </Stack>
      )}
    </HomeLayout>
  );
};
