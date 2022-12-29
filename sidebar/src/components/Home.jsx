import React from "react";
import "./Home.css";
import { styled, useTheme } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

const Home = () => {
  const drawerWidth = 1;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  return (
    <div className="homeDiv">
      <Main open={true}>
        <Typography paragraph>
          <h1>This Is the home Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
            facilis. Esse nulla ut minima consequuntur reprehenderit eveniet in
            minus temporibus nesciunt, numquam quas, dicta, similique vitae
            incidunt voluptate vel a quia! Tempora quis excepturi architecto ex
            commodi quae autem velit itaque esse rem ipsum suscipit odio veniam
            nulla, cupiditate natus!
          </p>
        </Typography>
      </Main>
    </div>
  );
};

export default Home;
