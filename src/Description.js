import React, { useContext } from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import { CssContext } from "./context/cssContext";

const Description = (props) => {
  const [value, setValue] = React.useState("");
  const { cssStyle, setCssStyle } = useContext(CssContext);

  React.useEffect(() => {
    setValue(props.description);
  }, [props.description]);

  const _handleKeyDown = function (e) {
    if (e.keyCode === 13 && e.ctrlKey) {
      console.log("do validate");
      e.preventDefault();
      props.setIsEditAble((prev) => {
        return { ...prev, description: false };
      });
      props.setDescription(value);
    }
  };
  return (
    <>
      <ReactQuill
        value={value}
        theme="snow"
        style={{ background: "white", width: "100%", height: "100%" }}
        onKeyDown={_handleKeyDown}
        onChange={(v) => {
          setValue(v);
        }}
        defaultValue={
          props.description.length ? props.dasignation : "Enter description"
        }
      />
    </>
  );
};

export default Description;
