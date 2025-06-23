import React from "react";

function TaskList() {
  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-5 overflow-x-auto h-[55%] w-full py-5 mt-10"
    >
      <div className="shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn React JS</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab
          sequi sapiente. Doloribus doloremque inventore explicabo eaque quam
          error. Ullam voluptatum eum quidem libero eligendi! Perspiciatis porro
          ad aliquam veritatis?
        </p>
      </div>
      <div className="shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn React JS</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab
          sequi sapiente. Doloribus doloremque inventore explicabo eaque quam
          error. Ullam voluptatum eum quidem libero eligendi! Perspiciatis porro
          ad aliquam veritatis?
        </p>
      </div>
      <div className="shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn React JS</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab
          sequi sapiente. Doloribus doloremque inventore explicabo eaque quam
          error. Ullam voluptatum eum quidem libero eligendi! Perspiciatis porro
          ad aliquam veritatis?
        </p>
      </div>
      <div className="shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Learn React JS</h2>
        <p className="text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab
          sequi sapiente. Doloribus doloremque inventore explicabo eaque quam
          error. Ullam voluptatum eum quidem libero eligendi! Perspiciatis porro
          ad aliquam veritatis?
        </p>
      </div>
    </div>
  );
}

export default TaskList;
