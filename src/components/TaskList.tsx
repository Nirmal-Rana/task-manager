import type { Task } from "@/types/task";
import React from "react";
import TaskItems from "./TaskItems";
interface props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete :(id:number)=>void;
}
function TaskList({ tasks, onToggle , onDelete }: props) {
  return (
    <div>
      {tasks.map((t) => (
        <TaskItems
          id={t.id}
          completed={t.complete}
          title={t.title}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
