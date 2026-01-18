import { Link } from "react-router";
import type { ServiceType } from "../serviceTypes";

type ServiceProps = {
  service: ServiceType;
};

export function Service({ service }: ServiceProps) {
  const { id, name, price } = service;

  return (
    <>
      <Link to={`/${id}/details`} className="link">
        <div className="service-container">
          <p className="service-name">{name}</p>
          <p className="service-price">{price}</p>
        </div>
      </Link>
    </>
  );
}
