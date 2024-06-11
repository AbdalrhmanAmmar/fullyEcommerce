import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import { store, presistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={presistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
