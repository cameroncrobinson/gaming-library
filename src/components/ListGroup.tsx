import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
}
function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {props.items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "active && list-group-item"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
