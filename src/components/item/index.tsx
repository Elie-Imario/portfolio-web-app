import { FC, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { ItemRevealConfig } from "../../utils/scrollReveal.config";
import "./item.scss";

type Props = {
  language: string;
  languageIcon: string;
};
export const Item: FC<Props> = ({ language, languageIcon }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ScrollReveal().reveal(itemRef.current as HTMLElement, ItemRevealConfig);
  }, []);
  return (
    <div className="icon-item" ref={itemRef}>
      <div className="icon-img">
        <img src={languageIcon} alt={language} />
      </div>
    </div>
  );
};
