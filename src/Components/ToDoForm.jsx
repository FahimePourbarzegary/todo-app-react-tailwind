const ToDoForm = () => {
  return (
    <form className="flex items-center justify-center p-8 ">
      <input
        type="text"
        placeholder="add todo.."
        className=" bg-slate-50 rounded mr-2 p-3 w-80 border-none"
      />
      <button className="w-10 h-12 text-center bg-violet-500 hover:bg-violet-300 transition-all text-white text-xl bold rounded ">
        +
      </button>
    </form>
  );
};

export default ToDoForm;
