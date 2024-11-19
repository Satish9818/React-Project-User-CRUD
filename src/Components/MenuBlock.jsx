import { Link } from "react-router-dom";
import style from "./findcoder.module.css";
const MenuBlock = () => {
  return (
    <ol id={style.menuBlock}>
      <li><Link to="/explore">Explore Work</Link></li>
      <li><Link to="/hire">Hire Talents</Link></li>
      <li><Link to="/dev">Dev board</Link></li>
      <li><Link to="/challenge">Challenges </Link></li>
    </ol>
  );
};
export default MenuBlock;
