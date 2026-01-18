import './App.css'
import { useEffect } from 'react';
import { ServiceList } from './components/ServiceList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from './state/servicesSlice';

function App() {
  const dispatch = useDispatch();

useEffect(() => {
  try {
    dispatch(fetchServices());
  } catch (error) { 
    console.log(error)
  }
  
 
}, []);
  
  const services = useSelector((state => state.services))
  console.log("services from App", services)
 
  return (
    <>
      <ServiceList services={services.data} status={services.status} error={ services.error} />
    </>
  ); 

}

export default App
