import React, { useRef, useState, useEffect } from "react";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

import thumbnail from "../../assests/images/plus.svg";
import "./imageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const resetPreviewUrlHandler = () => {
    console.log(previewUrl);
    setPreviewUrl("");
  };

  return (
    <div className="d-flex">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png .jpeg"
        onChange={pickedHandler}
      />
      {!previewUrl && (
        <div
          className="thumbnail"
          style={props.style}
          onClick={pickImageHandler}
        >
          <img alt="thumbnail" src={thumbnail} />
        </div>
      )}
      <div className="image-upload__preview position-relative">
        {previewUrl && <img alt="Preview" src={previewUrl} />}
        {previewUrl && <DoneIcon style={{ color: "green" }} />}
        {previewUrl && (
          <ClearIcon
            onClick={resetPreviewUrlHandler}
            style={{ color: "red", top: "3vh" }}
          />
        )}
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
