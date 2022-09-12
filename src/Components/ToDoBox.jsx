const ToDoBox = ({ category, header }) => {
  return (
    <div className=" h-full bg-slate-50 w-64 m-2 flex flex-col items-center p-2 rounded-lg shadow">
      <h1 className="p-2">{header}</h1>
      <div className="w-full max-h-24 sm:max-h-96 overflow-auto ">
        {category}
      </div>
    </div>
  );
};

export default ToDoBox;
