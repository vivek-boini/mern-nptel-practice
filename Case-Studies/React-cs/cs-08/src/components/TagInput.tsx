import { memo, useState } from 'react';

interface TagInputProps {
  onAddTag: (tagName: string) => void;
}

const TagInput = memo(({ onAddTag }: TagInputProps) => {
  console.log('Rendering TagInput');
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTag(input.trim());
      setInput('');
    }
  };

  return (
    <div>
      <h3>Add New Tag</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter tag name"
          style={{ padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 15px' }}>
          Add Tag
        </button>
      </form>
    </div>
  );
});

export default TagInput;