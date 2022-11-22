import React, { useState } from "react";
import { store } from "./componentes/redux/store";
import { Provider } from "react-redux";
import Home from "./componentes/Home/Home";
import { RouterProvider } from "react-router-dom";
import "./App.Style.scss";
import router from "./Router/Router";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./componentes/redux/store";
import { Grid, Container } from "@mui/material";
import ToDoCard from "./componentes/ToDoCard";
import ToDoForm from "./componentes/ToDoForm";
import { createBrowserRouter } from "react-router-dom";
function App() {
  const [update, setUpdate] = useState("add");
  const [FormStatus, setFormStatus] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    state: false,
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ToDoCard setUpdate={setUpdate} setFormStatus={setFormStatus} />,
    },
    {
      path: "/Form",
      element: (
        <ToDoForm
          update={update}
          setUpdate={setUpdate}
          FormStatus={FormStatus}
          setFormStatus={setFormStatus}
        />
      ),
    },
  ]);

  return (
    <Grid mt={5}>
      <Provider store={store}>
        <PersistGate persistor={persistor} />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </Provider>
    </Grid>
  );
}

export default App;
