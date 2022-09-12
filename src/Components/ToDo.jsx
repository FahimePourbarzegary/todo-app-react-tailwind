const ToDo = ({ name }) => {
  return (
    <div className=" bg-violet-300 w-full rounded-md p-1 mb-2 " draggable>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ToDo;
