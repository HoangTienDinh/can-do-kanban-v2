import React, { useState } from "react";
import initialData from "./initial-data";
import Column from "./components/Column";

function App() {
  const [column, setColumn] = useState(initialData.columns);
  const [tasks, setTasks] = useState(
    column.taskIds.map((taskId) => initialData.tasks[taskId])
  );

  return <Column key={column.id} column={column} tasks={tasks} />;
}

export default App;
