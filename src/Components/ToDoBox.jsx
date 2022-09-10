import ToDo from "./ToDo";

const ToDoBox = () => {
  const header = ["ToDo", "Progress", "Done"];
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center h-96  mt-8 ">
      {header.map((h, index) => (
        <div
          className=" h-96 bg-slate-50 w-64 m-2 flex flex-col items-center p-2 rounded-lg shadow"
          key={index}
        >
          <h1 className="p-2">{h}</h1>
          <div className="w-full max-h-14 overflow-auto sm:max-h-96 ">
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
            <ToDo />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToDoBox;
