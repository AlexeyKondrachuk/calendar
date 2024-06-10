import Cells from "./Cells";

export default function Rows({ rows }) {
    return (
      <tbody> 
        {rows.map((row, index) => <Cells key={index} cells={row} />)}
      </tbody> 
    );
  };