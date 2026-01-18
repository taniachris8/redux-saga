import type { ServicesType, ServiceType } from "../serviceTypes"
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Service } from "./Service";

type ServicesProps = {
    services: ServicesType;
  status: string;
  error: string;
};

export function ServiceList({ services, status, error }: ServicesProps) { 

    return (
      <>
        <div className="services-container">
          {status === "loading" && <Loader />}
          { status === "failed" && <Error/>}
          {status === "succeeded" &&
            services.map((service: ServiceType) => <Service key={service.id} service={service} />)}
        </div>
      </>
    );
}