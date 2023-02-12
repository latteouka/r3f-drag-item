import { useAtom } from "jotai";
import { pos3Atom, posAtom } from "./Obj";
import "../App.css";

const Pos = () => {
  const [pos] = useAtom(posAtom);
  const [pos3] = useAtom(pos3Atom);
  return (
    <div className="dom">
      <div className="flex">
        Position: {pos[0] + ", " + pos[1] + ", " + pos[2]}
      </div>
      <div className="flex">
        Intersect: {pos3[0] + ", " + pos3[1] + ", " + pos3[2]}
      </div>
    </div>
  );
};
export default Pos;
