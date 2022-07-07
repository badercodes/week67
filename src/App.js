import { BrowserRouter, Switch, Route } from "react-router-dom";
import UsersListingScreen from "./UsersListingScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeScreen from "./HomeScreen";
import LayoutRoute from "./LayoutRoute";
import LoginScreen from "./LoginScreen";
import Blogs from "./Blogs";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#151518",
    },
    secondary: {
      main: "#f50057",
    },
    typography: {
      fontFamily: "Caesar+Dressing",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <LayoutRoute
            path="/users"
            exact={true}
            component={UsersListingScreen}
          />
          <LayoutRoute path="/" exact={true} component={HomeScreen} />
          <LayoutRoute path="/login" exact={true} component={LoginScreen} />
          <LayoutRoute path="/blog" exact={true} component={Blogs} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
