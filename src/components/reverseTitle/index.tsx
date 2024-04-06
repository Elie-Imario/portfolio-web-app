import { FC, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { ReverseTitleRevealConfig } from "../../utils/scrollReveal.config";
import "./reverseTitle.scss";
type Props = {
  ico: string;
  titleLead: string;
};

export const ReverseTitle: FC<Props> = ({ ico, titleLead }) => {
  const reverseTitleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ScrollReveal().reveal(
      reverseTitleRef.current as HTMLElement,
      ReverseTitleRevealConfig
    );
  }, []);
  return (
    <div className="reverse-Title" ref={reverseTitleRef}>
      <div className="textline">
        <div className="content">
          <span className="ico">{ico}</span>
          <span>{titleLead}</span>
        </div>
      </div>
    </div>
  );
};
