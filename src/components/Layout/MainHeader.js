import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/uiSlice";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toggle());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton toggleHandler={toggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
