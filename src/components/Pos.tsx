import { useAtom } from "jotai";
import { posAtom } from "./Obj";
import "../App.css";

const Pos = () => {
  const [pos] = useAtom(posAtom);
  return (
    <div className="dom">
      <div className="flex">{pos[0] + ", " + pos[1] + ", " + pos[2]}</div>
    </div>
  );
};
export default Pos;
