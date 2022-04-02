import React, { useContext } from "react";
import CvBody from "./CvBody";
import TextAreaCodeEditor from "./TextAreaCodeEditor";
import Grid from "@mui/material/Grid";

const Container = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextAreaCodeEditor />
        </Grid>
        <Grid item xs={4}>
          <CvBody />
        </Grid>
      </Grid>
    </>
  );
};
export default Container;
