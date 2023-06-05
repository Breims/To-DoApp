import deleteIcon from "../assets/icons/deleteIcon.svg";
import CheckTodo from "./CheckTodo";

const TodoItem = () => {
    return (
      <section className="flex justify-center w-full">
        <div
          className={`w-4/5 flex items-center justify-between bg-white rounded-sm shadow-md hover:bg-palet-200 hover:text-palet-800`}
        >
          <CheckTodo />
          <p className="mr-auto p-4 text-md text-palet-600">Prueba exitosa</p>
          <img
            src={deleteIcon}
            alt="Delete"
            className="w-8 h-8 mx-4 cursor-pointer"
          />
        </div>
      </section>
    );
}
 
export default TodoItem;