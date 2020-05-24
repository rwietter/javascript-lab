import React, { useState, useEffect } from "react";
import { makeStyles, FormControl, FormHelperText } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useField } from "formik";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import "./Wysiwyg.css";

const useStyles = makeStyles(theme => ({
  editor: {
    borderRadius: 4,
    border: "1px solid rgba(0, 0, 0, 0.23)"
  },
  editorArea: {
    paddingLeft: 14,
    paddingRight: 14,
    minHeight: 275
  },
  formControl: {
    marginTop: 5,
    width: "100%",
    positon: "relative"
  }
}));

const IMAGE_UPLOAD = gql`
  mutation IMAGE_UPLOAD($image: Upload!, $alt: String) {
    imageUpload(image: $image, alt: $alt) {
      id
      url
      alt
    }
  }
`;

export default function Wysiwyg(props) {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const [state, setState] = useState(null);
  const [value, setValue] = useState(null);
  const [imageUpload] = useMutation(IMAGE_UPLOAD);

  const uploadCallback = file =>
    new Promise((resolve, reject) =>
      imageUpload({ variables: { image: file } })
        .then(response => {
          if (response.errors) reject(response.errors[0].message);
          let { url, alt } = response.data.imageUpload;
          resolve({ data: { link: url, alt } });
        })
        .catch(error => {
          reject(error);
        })
    );

  const toolbar = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "list",
      "textAlign",
      "colorPicker",
      "link",
      "emoji",
      "image"
    ],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"]
    },
    list: {
      options: ["unordered", "ordered"]
    },
    link: {
      options: ["link"]
    },
    image: {
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      previewImage: true,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      alt: { present: true, mandatory: false },
      uploadCallback,
      defaultSize: {
        width: "auto",
        height: "auto",
        maxWidth: 300,
        maxHeight: 300
      }
    }
  };

  useEffect(() => {
    let value_local = "";
    if (field.value === value) return;

    if (field.value) value_local = field.value;

    const contentBlock = htmlToDraft(value_local);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setState(editorState);
      setValue(field.value);
    }
  }, [field.value]);

  const onChange = e => {
    let html = draftToHtml(
      convertToRaw(e.getCurrentContent()),
      {
        trigger: "#",
        separator: " "
      },
      true,
      (entity, text) => {
        //image align config
        if (entity.type === "IMAGE") {
          var textAlign = "center";
          if (entity.data.alignment) {
            //entity.data.alignment is for float using the LCR options on the image
            //'none' means the user clicked center
            if (entity.data.alignment === "none") {
              textAlign = "center";
            } else {
              textAlign = entity.data.alignment;
            }
          }
          return `<p style="text-align:${textAlign};">
                      <img 
                      src="${entity.data.src}" 
                      alt="${entity.data.alt}"
                      style="height: ${entity.data.height}; width: ${entity.data.width};"/>
                  </p>`;
        }
      }
    );
    setValue(html);
    field.onChange({ target: { id: props.id, name: props.name, value: html } });
    if (!meta.touched)
      field.onBlur({ target: { id: props.id, name: props.name, value: html } });
    setState(e);
  };

  return (
    <FormControl
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
      className={classes.formControl}
    >
      <div
        className={classes.editor}
        style={{
          borderColor:
            meta.touched && Boolean(meta.error)
              ? "#ff0000"
              : "rgba(0, 0, 0, 0.23)"
        }}
      >
        <Editor
          {...props}
          toolbar={{ ...toolbar, ...props.toolbar }}
          editorState={state}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName={`editorClassName ${classes.editorArea}`}
          onEditorStateChange={onChange}
          localization={{
            locale: "pt"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -10,
            left: 14,
            backgroundColor: "#fff",
            padding: "0 2px",
            color:
              meta.touched && Boolean(meta.error)
                ? "#ff0000"
                : "rgba(0, 0, 0, 0.50)"
          }}
        >
          <label>
            {props.label}
            {props.required && " *"}
          </label>
        </div>
      </div>

      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
}
