import { useState } from "react";
import React from "react";
import { colors } from "./Colors";
function Buttons() {
  const [color, setColor] = useState("olive");
  

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="  mx-auto flex flex-wrap justify-center items-center bottom-12 insert-x-0 px-2 ">
          <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
            {colors.map((color) => {
              return (
                <button
                  onClick={() => (
                    setColor(color.value) 
                  )}
                  className="outline-none px-4 py-1 rounded-full text-white"
                  style={{ backgroundColor: color.value }}
                >
                  {color.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
