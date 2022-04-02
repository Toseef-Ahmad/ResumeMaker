import React, { createContext, useState } from "react";

const styles = {
  body: {
    width: "55vw",
    height: "97vh",
    backgroundColor: "#E33F2B",
    color: "#1D2344",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  inputFieldLabalColor: {
    color: "white",
  },
};
export const CssContext = createContext();

export const CssContextProvider = (props) => {
  const [cssStyle, setCssStyle] = useState(styles);
  return (
    <CssContext.Provider value={{ cssStyle, setCssStyle }}>
      {props.children}
    </CssContext.Provider>
  );
};
