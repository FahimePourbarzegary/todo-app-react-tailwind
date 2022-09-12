import { useState, useEffect } from "react";
import ToDoBox from "./Components/ToDoBox.jsx";
import ToDoForm from "./Components/ToDoForm.jsx";
import ToDo from "./Components/ToDo.jsx";
import axios from "axios";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });
  const [dragData, setDragData] = useState({});
  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/tasks");
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }, []);
  useEffect(() => {
    setTaskToCat();
  }, [tasks]);

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

  const setTaskToCat = async () => {
    await tasks.forEach((t) =>
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

  if (!categories || !tasks) return <p>Loading Please Waite...</p>;
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
