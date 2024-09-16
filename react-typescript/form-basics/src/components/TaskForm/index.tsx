import { memo } from 'react';

interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  task: string | null;
  newTaskChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Normally this function will re-render everytime the parent component re-renders by
// changing state for example. We can use React.memo to prevent this from happening.
// As long as its props are the same, it will not re-render.
// NOTE: handleSubmit prop is a function which, whenever it is defined, it will always be diffrent.
// In JS, console.log(Object.is({}, {})) returns false. This is because the objects are different.
// This is the same for functions. console.log(() => {}, () => {}) returns false. Even if the function is the same, if it is defined in different places,
// and the parent function is re-run again.
// it will always be a new function, so it will always cause a re-render. To avoid this, we can
// wrap the function in a useCallback hook. See file src/components/Form/index.tsx for an example.

const TaskForm = function ({ newTaskChanged, task, handleSubmit }: FormProps) {
  console.count('TaskForm rendered');
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          New Task:
          <input
            onChange={newTaskChanged}
            type="text"
            value={task ?? 'New Task'}
            name="task"
            placeholder="Add a new task"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default memo(TaskForm);
