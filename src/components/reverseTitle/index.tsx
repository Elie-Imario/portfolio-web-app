import { FC } from "react";
import "./reverseTitle.scss";
type Props = {
  ico: string;
  titleLead: string;
};

export const ReverseTitle: FC<Props> = ({ ico, titleLead }) => {
  return (
    <div className="reverse-Title">
      <div className="textline">
        <div className="content">
          <span className="ico">{ico}</span>
          <span>{titleLead}</span>
        </div>
      </div>
    </div>
  );
};
