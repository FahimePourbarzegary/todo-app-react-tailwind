import { useState, useEffect } from "react";
import ToDoBox from "./Components/ToDoBox.jsx";
import ToDoForm from "./Components/ToDoForm.jsx";
import ToDo from "./Components/ToDo.jsx";
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "خواندن زبان انگلیسی", category: "todo" },
    { id: 2, name: "خواندن زبان فرانسه", category: "inProgress" },
    { id: 3, name: "خواندن زبان سی شارپ", category: "done" },
    { id: 4, name: "ورزش", category: "todo" },
    { id: 5, name: "خواندن زبان ", category: "todo" },
    { id: 6, name: "خواندن زبان h", category: "inProgress" },
  ]);
  const [category, setCategory] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  const setTaskToCat = () => {
    if (category) {
      tasks.forEach((t) =>
        setCategory((category) => ({
          ...category,
          [t.category]: [
            ...category[t.category],
            <ToDo name={t.name} key={t.id} />,
          ],
        }))
      );
    }
  };
  useEffect(() => {
    setTaskToCat();
  }, []);
  if (!category) return <p>Loading Please Waite...</p>;
  return (
    <div className=" bg-white h-screen w-full p-8 pb-1">
      <h1 className="text-center text-4xl ">لیست انجام کارها</h1>

      <ToDoForm />
      <section className="flex flex-col sm:flex-row justify-center items-center h-96  mt-8 ">
        <ToDoBox category={category.todo} header="لیست کارها " />
        <ToDoBox category={category.inProgress} header="در حال انجام " />
        <ToDoBox category={category.done} header=" تمام شده " />
      </section>
    </div>
  );
};

export default App;
