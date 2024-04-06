import { FC, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
  fromLeftReveal,
  fromRightReveal,
} from "../../utils/scrollReveal.config";
import "./serviceItem.scss";

type Props = {
  serviceName: string;
  serviceImg: string;
  serviceKey: number;
};

export const ServiceItem: FC<Props> = ({
  serviceName,
  serviceImg,
  serviceKey,
}) => {
  const serviceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      serviceRef.current?.className.indexOf("service-0") !== -1 ||
      serviceRef.current?.className.indexOf("service-2") !== -1
    ) {
      ScrollReveal().reveal(
        serviceRef.current?.querySelector(".serviceName") as HTMLElement,
        fromLeftReveal
      );

      ScrollReveal().reveal(
        serviceRef.current?.querySelector(".serviceImg") as HTMLElement,
        fromRightReveal
      );
    } else {
      ScrollReveal().reveal(
        serviceRef.current?.querySelector(".serviceName") as HTMLElement,
        fromRightReveal
      );

      ScrollReveal().reveal(
        serviceRef.current?.querySelector(".serviceImg") as HTMLElement,
        fromLeftReveal
      );
    }
  }, []);
  return (
    <div className={`service-item service-${serviceKey}`} ref={serviceRef}>
      <span className="serviceName">{serviceName}</span>
      <div className="serviceImg">
        <img src={serviceImg} alt={serviceName} />
      </div>
    </div>
  );
};
