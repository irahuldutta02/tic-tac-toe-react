import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export function Icon({ iconName }) {
  if (iconName == "circle") {
    return(
      <div className="icon">
        <FaRegCircle />
      </div>
    );
  } else if (iconName == "cross") {
    return(
      <div className="icon">
         <RxCross2 />
      </div>
    );
  } else {
    return;
  }
}
