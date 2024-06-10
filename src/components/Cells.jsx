export default function Cells({ cells }) {
    return (
      <tr>
        {cells.map((cell, index) => <td key={index} className={cell.attr}>{cell.day}</td>)}
      </tr>
    );
  }