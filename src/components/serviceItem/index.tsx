import { FC } from "react";
import "./serviceItem.scss";

type Props = {
  serviceName: string;
  serviceImg: string;
};

export const ServiceItem: FC<Props> = ({ serviceName, serviceImg }) => {
  return (
    <div className="service-item">
      <span className="serviceName">{serviceName}</span>
      <div className="serviceImg">
        <img src={serviceImg} alt={serviceName} />
      </div>
    </div>
  );
};
