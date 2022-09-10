import ToDoBox from "./Components/ToDoBox";
import ToDoForm from "./Components/ToDoForm";

const App = () => {
  return (
    <div className=" bg-white h-screen w-full p-8 pb-1">
      <h1 className="text-center text-4xl "> Todo List </h1>
      <ToDoForm />
      <ToDoBox />
    </div>
  );
};

export default App;
