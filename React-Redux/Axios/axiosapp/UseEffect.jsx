import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("HELLO");
  });

  return (
    <div>
      <h1>
        Count {count} --- {count2}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Update Counter
      </button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        Update Counter
      </button>
    </div>
  );
};

export default UseEffect;
