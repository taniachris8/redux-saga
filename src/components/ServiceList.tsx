import type { ServicesType, ServiceType } from "../serviceTypes"
import { Error } from "./Error";
import { Loader } from "./Loader";
import { Service } from "./Service";

type ServicesProps = {
  services: ServicesType;
  status: string;
  repeatFetchRequest: () => void;
};

export function ServiceList({ services, status, repeatFetchRequest }: ServicesProps) { 

    return (
      <>
        <div className="services-container">
          {status === "loading" && <Loader />}
          {status === "failed" && (
            <Error repeatFetchRequest={repeatFetchRequest} />
          )}
          {status === "succeeded" &&
            services.length !== 0 &&
            services.map((service: ServiceType) => (
              <Service key={service.id} service={service} />
            ))}
        </div>
      </>
    );
}