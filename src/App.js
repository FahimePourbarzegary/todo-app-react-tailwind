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
  //inf about item dragging
  const [dragData, setDragData] = useState({});
  const getTasks = async () => {
    //get data of server
    await axios
      .get("http://localhost:3001/tasks")
      .then((res) => setTasks(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getTasks();
  }, []);
  useEffect(() => {
    //when information of tasks change
    //then set Task in to correct category
    setTaskToCat();
  }, [tasks]);

  const handleDragStart = (e, id, category) => {
    //get in of item when drag it
    setDragData({ id: id, category: category });
  };
  // dont render project
  //this function is necessary
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  //chage category of task
  const changeCategory = async (e, taskId, category) => {
    const newTasks = [...tasks];
    newTasks[taskId - 1].category = category;
    console.log(newTasks[taskId - 1]);
    try {
      await axios.put(
        `http://localhost:3001/tasks/${taskId}`,
        newTasks[taskId - 1]
      );
      const { data } = await axios.get("http://localhost:3001/tasks");

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  //when user drop item/task into a category
  const handleDrop = (e, category) => {
    const selected = dragData.id;
    changeCategory(e, selected, category);
  };

  const setTaskToCat = () => {
    setCategories({ todo: [], inProgress: [], done: [] });
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
  //post inf of new task in server
  const postTaskHandler = async (e, task) => {
    e.target.previousSibling.value = "";
    try {
      await axios.post("http://localhost:3001/tasks", task);
      const { data } = await axios.get("http://localhost:3001/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!categories || !tasks)
    return <p className=" text-center">درحال بارگیری اطلاعات...</p>;
  return (
    <div className=" bg-white h-screen w-full p-8 pb-1">
      <h1 className="text-center text-4xl ">لیست انجام کارها</h1>

      <ToDoForm postTaskHandler={postTaskHandler} />
      {tasks !== [] ? (
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
      ) : (
        <p className=" text-center"> درحال بارگیری اطلاعات....</p>
      )}
    </div>
  );
};

export default App;
