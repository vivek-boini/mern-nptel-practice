import { useState, useCallback } from 'react';
import TagList from './components/TagList';
import TagInput from './components/TagInput';

function App() {
  const [tags, setTags] = useState([
    { id: '1', name: 'React' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'JavaScript' },
    { id: '4', name: 'Performance' },
  ]);

  const [tagFilter, setTagFilter] = useState('');
  const [counter, setCounter] = useState(0);

  const handleAddTag = useCallback((tagName: string) => {
    const newTag = {
      id: Date.now().toString(),
      name: tagName,
    };
    setTags((prev) => [...prev, newTag]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Memoization Challenge</h1>

      <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
        <button onClick={() => setCounter(counter + 1)} style={{ padding: '10px 20px' }}>
          Unrelated Counter: {counter}
        </button>
        <p style={{ fontSize: '12px', marginTop: '5px' }}>
          Click to test - memoized components should NOT re-render
        </p>
      </div>

      <hr />

      <TagInput onAddTag={handleAddTag} />

      <hr />

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <label>Filter Tags: </label>
        <input
          type="text"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          placeholder="Type to filter"
          style={{ padding: '5px', marginLeft: '10px' }}
        />
      </div>

      <hr />

      <TagList tags={tags} filter={tagFilter} />
    </div>
  );
}

export default App;