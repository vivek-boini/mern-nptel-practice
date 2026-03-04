import { useDesignHubStore } from '../store';

function FileList() {
  // Subscribe only to files state and actions
  const files = useDesignHubStore((state) => state.files);
  const addFile = useDesignHubStore((state) => state.addFile);
  const deleteFile = useDesignHubStore((state) => state.deleteFile);
  const user = useDesignHubStore((state) => state.user);
  const addNotification = useDesignHubStore((state) => state.addNotification);

  const handleAddFile = () => {
    const newFile = {
      id: Date.now().toString(),
      name: `Design ${files.length + 1}`,
      content: 'Empty canvas',
    };
    addFile(newFile);
    // Trigger notification when file is created
    addNotification(`File "${newFile.name}" created`);
  };

  const handleDeleteFile = (id: string, name: string) => {
    deleteFile(id);
    // Trigger notification when file is deleted
    addNotification(`File "${name}" deleted`);
  };

  if (!user) {
    return <div className="file-list">Please login to see files</div>;
  }

  return (
    <div className="file-list">
      <h2>Design Files</h2>
      <button onClick={handleAddFile}>+ Add File</button>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <span>{file.name}</span>
            <button onClick={() => handleDeleteFile(file.id, file.name)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {files.length === 0 && <p>No files yet. Create your first design!</p>}
    </div>
  );
}

export default FileList;