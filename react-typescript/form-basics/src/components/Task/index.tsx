interface TaskProps {
  task: string;
  id: string;
  onTaskClick: (id: number) => void;
}
export default function Task({ onTaskClick, id, task }: TaskProps) {
  return <li onClick={() => onTaskClick(id)}>{task}</li>;
}
