import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import { dark2 } from "../../constants/color";


const AppLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => {
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
        <Grid item sm={4} md={3} sx={{
          display:{
            xs:"none",
            sm:"block"
          }
        }} height={"100%"}>F</Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        <WrappedComponent {...props} />
        </Grid>
        <Grid item md={4} lg={3} sx={{
          display:{
            xs:"none",
            sm:"block"
          },
          padding:"2rem",
          bgcolor:dark2
        }} height={"100%"}>T</Grid>
        </Grid>

        <div>Footer</div>
      </div>
    );
  };

  ComponentWithLayout.displayName = `AppLayout(${getDisplayName(WrappedComponent)})`;

  return ComponentWithLayout;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default AppLayout;
