import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSumit = (event) => {
    event.preventDefault();
    const newInputvalue = inputValue.trim();
    if (newInputvalue.length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputvalue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSumit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
