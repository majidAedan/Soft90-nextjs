import { FC } from "react";

import Grid from "@mui/material/Grid";

import AppCard from "@/components/AppCard/AppCard"

import { Apps } from "@/database/Apps.data";

import * as React from "react";

const AppList: FC = () => {
  return (
    <Grid container spacing={1} >
      {
        Apps.map((item, index) => (
          <AppCard
            key={index}
            data={item}
          />
        )
        )
      }
    </Grid>
  );
}

export default AppList;
