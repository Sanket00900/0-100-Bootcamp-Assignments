import React, { useState, useMemo } from "react";

//TODO
//* You have been given a list of items you shopped from the grocery store
//* You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  //! code starts here

  const totalValue = useMemo(() => {
    let value = 0;
    for (let i = 0; i < items.length; i++) {
      value += items[i].value;
    }
    return value;
  }, [items]);
  //! code ends here
  return (
    <div>
      <h1>Assignment no 3</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
