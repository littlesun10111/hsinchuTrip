import React from "react";
import { printDiv, printScreen } from "../../printTest";
const HowToPlan = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="">
        <h3>How to make a travel plan?</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quod
          vel autem voluptatem quibusdam quae amet neque porro, commodi voluptas
          laboriosam laborum cupiditate non. Optio maxime nesciunt corrupti fuga
          assumenda.
        </p>
        <button
          className="mr-3"
          onClick={() => {
            printScreen(DivIdToPrint);
          }}
        >
          print in js
        </button>
        <button
          onClick={() => {
            printDiv();
          }}
        >
          print in jQuery
        </button>
      </div>
      <video
        controls
        width="75%"
        src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4"
      ></video>
    </div>
  );
};
export default HowToPlan;
