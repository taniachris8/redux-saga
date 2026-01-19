import "./App.css";
import { useEffect } from "react";
import { ServiceList } from "./components/ServiceList";
import { useDispatch, useSelector } from "react-redux";
import { getServiceListRequired } from "./state/servicesSlice";
import type { RootState } from "./state/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceListRequired());
  }, [dispatch]);

  const services = useSelector((state: RootState) => state.services);

  return (
    <>
      <ServiceList
        services={services.data}
        status={services.status}
        repeatFetchRequest={() => dispatch(getServiceListRequired())}
      />
    </>
  );
}

export default App;
