import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addTodo = () => {
    if (!inputData.trim()) {
      alert("Please write a todo");
    } else {
      setItems([...items, { todo: inputData, status: "Pending" }]);
    }
    setInputData("")
  };

  const changeStatus = (index) => {
    const updatedItem = items.find((_, i) => index === i);
    if (updatedItem.status === "Pending") updatedItem.status = "Completed";
    else updatedItem.status = "Pending";
    setItems(
      items.map((element, i) => {
        if (index === i) {
          return updatedItem;
        }
        return element;
      })
    );
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => index !== i);
    setItems(updatedItems);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 sm:pt-14">
      <div className="flex justify-between p-4 rounded bg-slate-200 w-[300px] sm:w-[330px] drop-shadow-md">
        <input
          type="text"
          name=""
          id=""
          value={inputData}
          className="px-4 py-2 rounded drop-shadow sm:w-60"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="bg-[#9b5de5] px-4 py-1 drop-shadow-md rounded-sm hover:bg-[#834ec5] transition-all duration-150 ease-in-out text-white"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {!items.length ? <p className="text-xl text-white">Empty List...</p> : (
          <>
            {items.map((todo, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-start justify-between gap-4 bg-[#24273D] text-white p-4"
                >
                  <p className="flex flex-col justify-center gap-4 text-lg break-all">
                    {index + 1}. {todo.todo}
                  </p>
                  <p className="text-lg">status: {todo.status}</p>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <button
                      className="bg-[#5e388c] w-full px-4 py-1 drop-shadow-md rounded-sm hover:bg-[#482a6b] transition-all duration-150 ease-in-out"
                      onClick={() => changeStatus(index)}
                    >
                      Change Status
                    </button>
                    <button
                      className="bg-[#b44386] w-full px-4 py-1 drop-shadow-md rounded-sm hover:bg-[#8c3368] transition-all duration-150 ease-in-out"
                      onClick={() => deleteItem(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
