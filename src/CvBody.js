import React, { useContext } from "react";
import { CssContext } from "./context/cssContext";
import Image from "./Image";
import InputField from "./InputField";
import Description from "./Description";
// const parse = require("html-react-parser");
import parse from "html-react-parser";
const CvBody = () => {
  const { cssStyle, setCssStyle } = useContext(CssContext);
  const [isEditAble, setIsEditAble] = React.useState({
    designation: true,
    description: true,
  });
  const [dasignation, setDasignation] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    parse(description);
  }, [description]);
  return (
    <React.Fragment>
      <div style={cssStyle.body}>
        <Image style={cssStyle.profileImage} />
        {isEditAble.designation ? (
          <InputField
            setIsEditAble={setIsEditAble}
            setDasignation={setDasignation}
            dasignation={dasignation}
          />
        ) : (
          <h1
            onClick={() =>
              setIsEditAble((prev) => {
                return { ...prev, designation: !prev.designation };
              })
            }
          >
            {dasignation}
          </h1>
        )}

        {isEditAble.description ? (
          <Description
            setIsEditAble={setIsEditAble}
            description={description}
            setDescription={setDescription}
          />
        ) : (
          <div
            onClick={() =>
              setIsEditAble((prev) => {
                return { ...prev, description: !prev.description };
              })
            }
          >
            {parse(description)}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default CvBody;
