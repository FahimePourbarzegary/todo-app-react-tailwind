
const ToDo = ({ name, onDragStart, id, category }) => {

  return (
    <div
      className=" bg-violet-300 w-full rounded-md p-1 mb-2 cursor-pointer transition-all "
      onDragStart={(e) => onDragStart(e, id, category)}
      draggable
    >
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ToDo;
