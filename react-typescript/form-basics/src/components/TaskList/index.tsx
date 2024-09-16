import Task from '../Task';

interface TaskListProps {
  tasks: Array<[string, string]>;
  onTaskClick: (id: number) => void;
}
export default function TaskList({ onTaskClick, tasks }: TaskListProps) {
  return (
    <section>
      <h2>Task List</h2>
      <ul>
        {tasks.map(([task, id]: [string, string]) => {
          return (
            <Task onTaskClick={onTaskClick} key={id} id={id} task={task} />
          );
        })}
      </ul>
    </section>
  );
}
