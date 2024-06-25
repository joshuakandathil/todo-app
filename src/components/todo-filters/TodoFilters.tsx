import { Filter } from "../../models/Todo";
import * as styles from "./TodoFilters.module.scss";

type Props = {
  selected?: Filter;
  onSelectFilter?: (filter: Filter) => void;
};

const TodoFilters = ({ selected, onSelectFilter }: Props) => {
  const getSelectedClass = (filter: Filter) => {
    return filter === selected ? "selected" : "";
  };

  return (
    <div className={styles.todoFilters}>
      <button
        className={getSelectedClass("all")}
        onClick={() => onSelectFilter?.("all")}
      >
        All
      </button>

      <button
        className={getSelectedClass("active")}
        onClick={() => onSelectFilter?.("active")}
      >
        Active
      </button>

      <button
        className={getSelectedClass("completed")}
        onClick={() => onSelectFilter?.("completed")}
      >
        Completed
      </button>
    </div>
  );
};
export default TodoFilters;
