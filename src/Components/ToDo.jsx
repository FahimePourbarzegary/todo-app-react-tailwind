import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ToDo = ({ name, onDragStart, id, category, deleteTaskHandler}) => {
  return (
    <div
      className="flex justify-between bg-violet-300  rounded-md p-1 mb-2 cursor-pointer transition-all  max-h-40"
      onDragStart={(e) => onDragStart(e,id, category)}
      draggable
    >
      <p className="text-sm">{name}</p>
      <span>
        <FontAwesomeIcon
          icon={faTrashCan}
          color="#6d28d9"
          onClick={deleteTaskHandler}
        />
      </span>
    </div>
  );
};

export default ToDo;
