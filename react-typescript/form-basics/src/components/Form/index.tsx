import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';

export default function Form() {
  // tasks should be an Array of <Todo> type {content: string, id, string, completed: boolean}
  // This interface should be better to handle metadata on the task
  const [tasks, setTasks] = useState<Array<[string, string]>>([]);
  const [task, setTask] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  // This is for demo purposes to show that when the count changes. The <TaskForm /> does not re-render
  const handleCounter = () => setCount(count + 1);

  const newTaskChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTask(event.currentTarget.value);
    },
    []
  );

  // IMPORTANT: The following applies for newTaskChanged as well.
  // useCallback now wraps my function which is now going to cache it.
  // Use callback will always return the same function as long as 'tasks' are the same.
  // If tasks changes, then the function that is passed in the lexical scope will be return and not the cached one.
  // Causing the <TaskForm /> to re-render. However, when the 'count' changes, the cached function will be returned
  // and the <TaskForm /> will not re-render as the prop 'handleSubmit' is the same.
  // NOTE: However, it's important to note that `useCallback` (and memoization in general)
  // is not always necessary and can even lead to performance issues if not used properly.
  // It's best used in scenarios where the callback is passed to child components and the
  // re-rendering of these components is expensive. This is just a simple working example.
  const addTask = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form: FormData = new FormData(event.currentTarget);
    const task: FormDataEntryValue | null = form.get('task');
    let stampedTask: [string, string];
    if (task) {
      stampedTask = [task.toString(), uuidv4()];
      // setTasks([...tasks, stampedTask]);
      setTasks(
        (prevTasks: Array<[string, string]>): Array<[string, string]> => [
          ...prevTasks,
          stampedTask,
        ]
      );
      setTask('');
    }
  }, []);

  //FIX: this should be of type string, but typescript is not complaining that it is not ?
  const removeTask = (idToBeRemoved: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter(([task, id]) => id !== idToBeRemoved)
    );
  };

  return (
    <>
      <TaskList onTaskClick={removeTask} tasks={tasks} />
      <TaskForm
        task={task}
        newTaskChanged={newTaskChanged}
        handleSubmit={addTask}
      />
      <button onClick={handleCounter}>Count is now {count}</button>
    </>
  );
}
