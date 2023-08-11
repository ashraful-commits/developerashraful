import { Provider } from "react-redux";
import "./App.css";
import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import store from "./app/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;
