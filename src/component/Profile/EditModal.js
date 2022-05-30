import { AddAPhoto } from "@mui/icons-material";
import {
  Box,
  Modal,
  Stack,
  Avatar,
  Typography,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../helper/user";
import { LoginStyles } from "../../styles/Loginstyle";
import { ProfileStyles } from "../../styles/ProfileStyle";
import { cloudinaryApi } from "../../utils/api";

export const EditModal = ({ currUser, open, onClose }) => {
  const { signUpModalStyle } = LoginStyles;
  const { UploadImageStyle, UploadIconStyle, EditContainerStyle } =
    ProfileStyles;
  const {
    auth: { token },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [profilePictureData, setProfilePictureData] = useState({
    url: "",
    file: "",
    loading: false,
  });
  useEffect(() => {
    setProfilePictureData({
      url: "",
      file: "",
      loading: false,
    });
  }, []);

  const updateProfilePicture = async (event) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "jpj1n38k");
      formData.append("folder", "dhindhora");
      setProfilePictureData((prev) => ({ ...prev, loading: true }));
      try {
        const response = await fetch(cloudinaryApi, {
          method: "POST",
          body: formData,
        });
        console.log(response);
        const { url } = await response.json();
        console.log(url);
        setProfilePictureData((prev) => ({ ...prev, url }));
        setProfilePictureData((prev) => ({ ...prev, loading: false }));
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      bio: event.target.bio.value ? event.target.bio.value : currUser.bio,

      website: event.target.website.value
        ? event.target.website.value
        : currUser.website,

      profilePicture: profilePictureData.url
        ? profilePictureData.url
        : currUser.profilePicture,
    };
    console.log(profilePictureData);
    dispatch(editUser({ userData: { ...currUser, ...updatedData }, token }));
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={signUpModalStyle}>
        <Backdrop
          open={profilePictureData.loading}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress />
        </Backdrop>
        <form onSubmit={handleFormSubmit}>
          <Stack gap={1}>
            <Box sx={EditContainerStyle}>
              <Avatar
                alt="profile-pic"
                src={
                  profilePictureData.file
                    ? URL.createObjectURL(profilePictureData.file)
                    : currUser?.profilePicture
                }
                sx={{ height: 156, width: 156 }}
              />
              <input
                accept="image/*"
                id="profile-Picture"
                name="profile-Picture"
                style={{ display: "none" }}
                type="file"
                onChange={(e) => {
                  updateProfilePicture(e);
                  setProfilePictureData((prev) => ({
                    ...prev,
                    file: e.target.files[0],
                  }));
                }}
              />

              <label style={UploadImageStyle} htmlFor="profile-Picture">
                <AddAPhoto style={UploadIconStyle} />
              </label>
            </Box>
            <Typography variant="body1" component="p">
              <strong>Username :</strong> @{`${currUser.username}`}
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Name :</strong>{" "}
              {`${currUser.firstName} ${currUser.lastName}`}
            </Typography>
            <Typography variant="body1" component="p" fontWeight={600}>
              Bio
            </Typography>
            <TextField size="small" id="bio" />
            <Typography variant="body1" component="p" fontWeight={600}>
              Website
            </Typography>
            <TextField size="small" id="website" />
            <Button
              color="success"
              variant="contained"
              sx={{ ml: "auto", mt: 1 }}
              type="submit"
            >
              Update
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
