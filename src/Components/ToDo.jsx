const ToDo = ({ name, onDragStart, id, category }) => {
  return (
    <div
      className="flex justify-between bg-violet-300  rounded-md p-1 mb-2 cursor-pointer transition-all  max-h-40"
      onDragStart={(e) => onDragStart(e, id, category)}
      draggable
    >
      <p className="text-sm">{name}</p>
      <span>icon</span>
    </div>
  );
};

export default ToDo;
