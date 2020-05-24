import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Fab,
  Tooltip,
  Modal,
  Fade,
  Backdrop,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
import { DeleteOutline, AddAPhoto, Crop } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const useStyles = makeStyles(theme => ({
  area: { position: "relative" },
  input: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0,
    zIndex: 10,
    "&:hover + .image-picker-retina": {
      opacity: 1
    }
  },
  avatar: { width: "100%", height: "100%" },
  btn_crop: { position: "absolute", zIndex: 99, right: 20, top: -10 },
  btn_remove: { position: "absolute", zIndex: 99, right: -10, top: 20 },
  retina: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "0.5s all",
    "&:hover": {
      opacity: 1
    },
    cursor: "pointer"
  },
  imageIcon: {
    width: 35,
    height: 35,
    color: "#fff"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
    position: "absolute"
  },
  card: {
    width: "100%",
    maxWidth: 600,
    maxHeight: "100%",
    overflow: "auto"
  },
  crop: {
    width: "100%"
  }
}));

const ImagePicker = forwardRef(
  (
    { image, onChange, maxWidth, maxHeight, width, height, onRemove, error },
    ref
  ) => {
    const classes = useStyles();
    const [imagePreview, setImagePreview] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [crop, setCrop] = useState({
      aspect: 1,
      unit: "%",
      width: 60
    });
    const [imageRef, setImageRef] = useState(null);

    const clear = () => {
      setImagePreview(null);
    };

    useImperativeHandle(ref, () => ({
      clear
    }));

    const imageChange = e => {
      const reader = new FileReader();
      const { files } = e.target;
      const file = files[0];
      onChange(file);
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    };

    const handleClose = () => {
      setOpen(false);
      setCrop({
        aspect: 1,
        unit: "%",
        width: 60
      });
    };

    const onImageLoaded = image => {
      setImageRef(image);
    };

    const getCroppedImg = () => {
      const image = imageRef;
      const fileName = "Croped image";
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      // As a blob
      return new Promise((resolve, reject) => {
        canvas.toBlob(
          blob => {
            blob.name = fileName;
            let fileUrl;
            window.URL.revokeObjectURL(fileUrl);
            fileUrl = window.URL.createObjectURL(blob);
            resolve({ fileUrl, blob });
          },
          "image/jpeg",
          1
        );
      });
    };

    const cropImg = async () => {
      let image = await getCroppedImg();
      let file = new File([image.blob], "Croped image", { type: "image/jpeg" });
      handleClose();
      setImagePreview(image.fileUrl);
      onChange(file);
    };

    const removeImage = () => {
      setImagePreview(null);
      onRemove();
    };

    const [t] = useTranslation("layout");

    return (
      <>
        <div
          className={classes.area}
          style={{
            width: (maxWidth && "100%") || width || 150,
            height: (maxHeight && "100%") || height || 150,
            maxWidth,
            maxHeight,
            margin: 10
          }}
        >
          <Tooltip title={t("upload a photo")}>
            <input
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={imageChange}
              className={classes.input}
            />
          </Tooltip>
          {imagePreview && (
            <>
              <Tooltip title={t("Crop")}>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  className={classes.btn_crop}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Crop />
                </Fab>
              </Tooltip>

              <Tooltip title={t("Remove photo")}>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  className={classes.btn_remove}
                  onClick={removeImage}
                >
                  <DeleteOutline />
                </Fab>
              </Tooltip>
            </>
          )}
          <div className={`${classes.retina} image-picker-retina`}>
            <AddAPhoto className={classes.imageIcon} />
          </div>
          <Avatar
            src={imagePreview || image || "/static/images/upload_image.png"}
            className={classes.avatar}
          ></Avatar>
        </div>
        {imagePreview && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <Card className={classes.card}>
                <CardHeader title={t("Crop image")} />
                <CardContent>
                  <Grid container direction="row" justify="center">
                    <ReactCrop
                      src={imagePreview}
                      crop={crop}
                      onImageLoaded={onImageLoaded}
                      onChange={newCrop => setCrop(newCrop)}
                    />
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button onClick={handleClose}>{t("Cancel")}</Button>
                  <Button color="primary" variant="contained" onClick={cropImg}>
                    {t("Crop")}
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          </Modal>
        )}
      </>
    );
  }
);

export default ImagePicker;
