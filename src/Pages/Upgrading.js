import { useState } from "react";

export default function Upgrading() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ini adalah judul</h1>
      <p>Nilai saat ini: {count}</p>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
