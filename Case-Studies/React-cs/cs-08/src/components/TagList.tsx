import { memo, useMemo } from 'react';

interface Tag {
  id: string;
  name: string;
}

interface TagListProps {
  tags: Tag[];
  filter: string;
}

const TagList = memo(({ tags, filter }: TagListProps) => {
  console.log('Rendering TagList');

  const filteredTags = useMemo(() => {
    console.log('Computing filtered tags');
    return tags.filter((tag) =>
      tag.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [tags, filter]);

  return (
    <div>
      <h3>Tag List</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {filteredTags.map((tag) => (
          <span
            key={tag.id}
            style={{
              padding: '6px 12px',
              background: '#ddd',
              borderRadius: '4px',
            }}
          >
            {tag.name}
          </span>
        ))}
      </div>
      <p>Showing {filteredTags.length} of {tags.length} tags</p>
    </div>
  );
});

export default TagList;