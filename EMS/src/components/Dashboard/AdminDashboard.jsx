import React from "react";
import Header from "../../others/Header";

function AdminDashboard() {
  return (
    <div className="p-10">
      <Header />
      <div className="mt-10 h-100 w-full bg-[#1c1c1c] p-5">
        <form className="flex w-full gap-4">
        <div className="w-1/2 ">
            <div>
              <h3>Task List</h3>
              <input
                className="border-1 rounded w-100 mt-4"
                type="text"
                placeholder="make a UI design"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input type="data" />
            </div>
            <div>
              <h3>Asing to</h3>
              <input type="text" placeholder="Employee name" />
              <h3>Category</h3>
              <input type="text" placeholder="desing , dev, etc" />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <h3>Description</h3>
            <textarea className="border-1" name="" id="" cols="30" row="10"></textarea>
            <button>create task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
