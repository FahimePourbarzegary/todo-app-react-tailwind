import { useState } from "react";

const ToDoForm = ({ postTaskHandler }) => {
  const [task, setTask] = useState({ name: "", category: "todo" });
  const onChangeHandler = (e) => {
    if (e.target.value.length < 20)  setTask({ ...task, name: e.target.value });
    else alert("تنها 20لغت مجاز است");
  };

  return (
    <div className="flex items-center justify-center p-8 ">
      <input
        type="text"
        placeholder="اضافه کردن کار جدید..."
        name="name"
        id="name"
        className=" bg-slate-50 rounded ml-2 p-3 w-80 border-none"
        onChange={onChangeHandler}
      />
      <button
        className="w-10 h-12 text-center bg-violet-500 hover:bg-violet-300 transition-all text-white text-xl bold rounded "
        onClick={(e)=>postTaskHandler(e,task)}
      >
        +
      </button>
    </div>
  );
};

export default ToDoForm;
