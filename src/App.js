import React, { useState } from "react";
import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [column, setColumn] = useState(initialData.columns);
  const [tasks, setTasks] = useState(
    column.taskIds.map((taskId) => initialData.tasks[taskId])
  );

  const onDragEnd = () => {
    // waiting
  }
  return (
    <DragDropContext
    onDragEnd={onDragEnd}>
      <Column key={column.id} column={column} tasks={tasks} />
    </DragDropContext>
  );
}

export default App;
