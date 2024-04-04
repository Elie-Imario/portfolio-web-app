import "./burgerMenu.scss";

export const BurgerMenu = () => {
  return (
    <div className="burgerMenu">
      <button type="button" className="burgerMenu-toggler">
        <span className="burgerMenu-toggler-bar bar1"></span>
        <span className="burgerMenu-toggler-bar bar2"></span>
        <span className="burgerMenu-toggler-bar bar3"></span>
      </button>
    </div>
  );
};
