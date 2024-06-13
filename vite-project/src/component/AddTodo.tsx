import { useEffect, useRef, useState } from "react";
import { Input } from ".";

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput(input);

  };
  return (
    <form onSubmit={onsubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing..."
          ref={inputRef}
        />
            

        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 rounded active:scale-100 active:bg-blue-700"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
