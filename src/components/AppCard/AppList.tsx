import { FC } from "react";

import Grid from "@mui/material/Grid";

import AppCard from "@/components/AppCard/AppCard"

import axios from "axios";
import * as React from "react";


const AppList: FC = () => {
  const [apps, setApps] = React.useState([]);


  const getApps = async () => {
    axios.get('/api/aplications')
      .then(function (response) {
        // handle success
        if (response.data?.data) {
          setApps(response.data.data)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }
  React.useEffect(() => {
    getApps()
  }, []);

  return (
    <Grid sx={{
      backgroundColor: '#E8E8E8',
      display: 'flex',
      marginTop: 8,


      alignItems: 'center', // قرارگیری در مرکز

    }}
    >
      <Grid

        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left', // قرارگیری در مرکز
          width: '65%',
          gap: 2, // فاصله بین کارت‌ها
          margin: 2,
          //height:5,
        }}  >
        {
          apps.map((item, index) => (
            <AppCard
              key={index}
              data={item}
            />
          )
          )
        }
      </Grid>
    </Grid>

  );
}

export default AppList;

