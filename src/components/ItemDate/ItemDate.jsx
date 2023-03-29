import "./ItemDate.css";

function ItemDate(props) {
  // gettin date values
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear("en-us", { year: "4-digit" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="date">
      <span> {day}</span>
      <span> {month}</span>
      <span> {year}</span>
    </div>
  );
}

export default ItemDate;
