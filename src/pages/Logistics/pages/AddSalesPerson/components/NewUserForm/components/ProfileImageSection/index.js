import React, { useState, useEffect, useRef } from "react";
import edit from "../../../../../../assets/edit.svg";
import deleted from "../../../../../../assets/delete.svg";
const ProfileImageSection = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  const fileRef = useRef();
  const triggerFileModal = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  };
  const handleDelete = () => {
    setSelectedFile(null);
  };
  return (
    <div style={{ width: "183px", margin: 15 }}>
      <input
        type="file"
        accept="image/*"
        class="custom-file-input"
        onChange={handleChange}
        ref={fileRef}
        hidden
      />
      <div
        className="profileImageSection"
        style={{ backgroundImage: `url(${preview})` }}
        onClick={triggerFileModal}
      >
        {!selectedFile && (
          <>
            <div className="profileImageSectionIcon"></div>
            <span>Profile Photo</span>
          </>
        )}
      </div>
      <div className="profileImageSectionActions">
        <button type="button" onClick={triggerFileModal}>
          <div
            className="eyecons"
            style={{ backgroundImage: `url(${edit})`, width: 14, height: 14 }}
          ></div>
        </button>
        <button onClick={handleDelete} type="button">
          <div
            className="eyecons"
            style={{
              backgroundImage: `url(${deleted})`,
              width: 12,
              height: 16,
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};
export default ProfileImageSection;
