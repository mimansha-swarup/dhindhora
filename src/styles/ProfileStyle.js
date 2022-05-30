import { blueGrey } from "@mui/material/colors";

export const ProfileStyles = {
  UploadImageStyle: {
    position: "absolute",
    bottom: 0,
    right: 15,
    cursor: "pointer",
    background: blueGrey[100],
    padding: ".3rem",
    paddingRight: ".4rem",
    paddingBottom: ".4rem",
    paddingTop: ".2rem",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    border: "2px solid white",
  },
  UploadIconStyle: { alignSelf: "center", fontSize: ".95rem" },
  EditContainerStyle: {
    position: "relative",
    width: "fit-content",
    mx: "auto",
    mb: 2,
    borderRadius: "100%",
  },
};
