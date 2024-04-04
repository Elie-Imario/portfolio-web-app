import { FC } from "react";
import "./item.scss";

type Props = {
  language: string;
  languageIcon: string;
};
export const Item: FC<Props> = ({ language, languageIcon }) => {
  return (
    <div className="icon-item">
      <div className="icon-img">
        <img src={languageIcon} alt={language} />
      </div>
    </div>
  );
};
