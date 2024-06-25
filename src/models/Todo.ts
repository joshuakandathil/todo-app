export type Todo = {
  id?: number;
  completed?: boolean;
  text?: string;
};

export type Filter = "all" | "active" | "completed";
