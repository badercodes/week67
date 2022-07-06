import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MCard from "./MCard";
import Skeleton from "@mui/material/Skeleton";

function UsersListingScreen() {
  let [loadingState, setLoadingState] = useState(true);
  let [dataState, setDataState] = useState([]);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((stringResponse) => stringResponse.json())
      .then((jsonResponse) => {
        setDataState(jsonResponse);
        setLoadingState(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Box mt={4}>
        <Container>
          {loadingState && (
            <Grid>
              <h1>Loading......</h1>
              <Skeleton
                variant="rectangular"
                height={300}
                // width={200}
              />
            </Grid>
          )}

          {!loadingState && (
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5].map(() => {
                return (
                  <Grid item md={4} sm={12}>
                    <MCard imageSrc="./logo192.png" />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default UsersListingScreen;
