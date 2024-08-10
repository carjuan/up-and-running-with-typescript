import { useState } from 'react';
import './App.css';
import Subreddit from './components/Subreddit/Subreddit';

function App() {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ] = useState<number>(0);

  const [title, setTitle]: [
    null | string,
    React.Dispatch<React.SetStateAction<null | string>>,
  ] = useState<null | string>(null);

  interface HeadingStyles {
    color: string;
    fontFamily: string;
  }

  const styles: HeadingStyles = {
    color: 'red',
    fontFamily: 'cursive',
  };

  console.log('rendering app component', Date.now());

  return (
    <div className="container">
      <h1 style={styles}>{title}</h1>
      <p>today's date is {new Date().getDay()}</p>
      <label htmlFor="">
        Title
        <input
          onChange={(event) => setTitle(event.currentTarget.value)}
          value={title || ''}
          type={title || ''}
        />
        <small>Please enter a valid text</small>
      </label>

      <button onClick={() => setCount(count + 1)}>
        The current count is {count}
      </button>
      <img src="https://placekitten.com/200/200" alt="" />

      <div>
        <Subreddit />
      </div>
    </div>
  );
}

export default App;
