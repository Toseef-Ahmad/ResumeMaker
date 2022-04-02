import React, { useContext } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { CssContext } from "./context/cssContext";
import styleToCss from "style-object-to-css-string";
// import ctoj from "css-to-js-object";

const TextAreaCodeEditor = () => {
  const { cssStyle, setCssStyle } = useContext(CssContext);
  const [code, setCode] = React.useState("");
  const [jss, setJss] = React.useState({});
  React.useEffect(() => {
    console.log(parseCSS());
  }, []);

  React.useEffect(() => {
    if (code.length > 1) {
      code.split("}").forEach((css, index) => {
        if (index < code.split("}").length - 1) {
          console.log(parseCssToCss(code.split("}")[2]));
          index >= 1
            ? setJss((prev) => {
                return {
                  ...prev,
                  [css.split(" ")[1].replace("\n\n", "")]: parseCssToCss(css),
                };
              })
            : setJss((prev) => {
                return {
                  ...prev,
                  [css.split(" ")[0].replace("\n", "")]: parseCssToCss(css),
                };
              });
        }
      });
    }
  }, [code]);

  React.useEffect(() => {
    setCssStyle(jss);
  });

  function parseCssToCss(css) {
    const trimCss = splitCss(css);
    return trimCss.split(";").reduce(function (ruleMap, ruleString) {
      var rulePair = ruleString.split(":");
      ruleMap[rulePair[0].trim()] = rulePair[1].trim();
      return ruleMap;
    }, {});
  }

  function splitCss(css) {
    // console.log(css);
    console.log(css.split("{"));
    const removeBraces = css
      .split("{")
      .splice(1)
      .join("")
      .replace("}", "")
      .split("\n")
      .slice(1)
      .join("");

    const trimCss = removeBraces.slice(0, removeBraces.length - 1);
    // console.log(trimCss);
    // console.log(trimCss, " trim");
    return trimCss;
  }

  const parseCSS = () => {
    for (let css in cssStyle) {
      setCode((prev) => {
        return prev + `${css} {\n${styleToCss(cssStyle[css])}\n} \n\n`;
      });
    }
    // console.log(code, " code");
  };
  return (
    <>
      <CodeEditor
        value={code}
        language="css"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          width: "100%",
          height: "100%",
          fontSize: 18,
          backgroundColor: "black",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
};

export default TextAreaCodeEditor;
