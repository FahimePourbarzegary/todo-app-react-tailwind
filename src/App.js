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
  const [categories, setCategories] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  const [dragData, setDragData] = useState({});

  const handleDragStart = (e, id, category) => {
    setDragData({ id: id, category: category });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const changeCategory = (e, taskId, category) => {
    const newTasks = [...tasks];
    newTasks[taskId - 1].category = category;
    setCategories({ todo: [], inProgress: [], done: [] });
    setTaskToCat();
  };

  const handleDrop = (e, category) => {
    const selected = dragData.id;
    changeCategory(e, selected, category);
  };

  const setTaskToCat = () => {
    tasks.forEach((t) =>
      setCategories((category) => ({
        ...category,
        [t.category]: [
          ...category[t.category],
          <ToDo
            name={t.name}
            key={t.id}
            onDragStart={handleDragStart}
            category={t.category}
            id={t.id}
          />,
        ],
      }))
    );
  };
  useEffect(() => {
    setTaskToCat();
  }, []);
  if (!categories) return <p>Loading Please Waite...</p>;
  return (
    <div className=" bg-white h-screen w-full p-8 pb-1">
      <h1 className="text-center text-4xl ">لیست انجام کارها</h1>

      <ToDoForm />
      <section className="flex flex-col sm:flex-row justify-center items-center h-96  mt-8 ">
        <ToDoBox
          category={categories.todo}
          header="لیست کارها "
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "todo")}
        />
        <ToDoBox
          category={categories.inProgress}
          header="در حال انجام "
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "inProgress")}
        />
        <ToDoBox
          category={categories.done}
          header=" تمام شده "
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}
        />
      </section>
    </div>
  );
};

export default App;
