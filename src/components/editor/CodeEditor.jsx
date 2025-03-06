import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { v4 as uuidv4 } from "uuid";
import TerminalComponent from "./TerminalComponent";

function VSCodeClone() {
  const [files, setFiles] = useState({
    "index.js": { name: "index.js", language: "javascript", content: "// Start coding..." },
  });
  const [activeFile, setActiveFile] = useState("index.js");

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("files"));
    if (savedFiles) setFiles(savedFiles);
  }, []);

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  const handleEditorChange = (value) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [activeFile]: { ...prevFiles[activeFile], content: value },
    }));
  };

  const addFile = () => {
    const fileName = `file-${uuidv4().slice(0, 6)}.js`;
    setFiles({ ...files, [fileName]: { name: fileName, language: "javascript", content: "" } });
    setActiveFile(fileName);
  };

  const deleteFile = (fileName) => {
    if (Object.keys(files).length > 1) {
      const updatedFiles = { ...files };
      delete updatedFiles[fileName];
      setFiles(updatedFiles);
      setActiveFile(Object.keys(updatedFiles)[0]);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for File Management */}
      <div className="w-1/5 bg-gray-900 p-2 text-white">
        <h2 className="text-lg font-bold">File Explorer</h2>
        <button className="bg-green-500 px-2 py-1 mt-2" onClick={addFile}>+ New File</button>
        {Object.keys(files).map((file) => (
          <div key={file} className="flex justify-between mt-2 p-1 cursor-pointer hover:bg-gray-700"
            onClick={() => setActiveFile(file)}>
            {files[file].name}
            <button className="text-red-400" onClick={() => deleteFile(file)}>✖</button>
          </div>
        ))}
      </div>

      {/* Main Editor */}
      <div className="w-4/5">
        <Editor
          height="70vh"
          theme="vs-dark"
          language={files[activeFile]?.language || "javascript"}
          value={files[activeFile]?.content}
          onChange={handleEditorChange}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            automaticLayout: true,
            wordWrap: "on",
            formatOnPaste: true,
            formatOnType: true,
            autoClosingBrackets: "always",
          }}
        />
        {/* Terminal Integration */}
        <TerminalComponent />
      </div>
    </div>
  );
}

export default VSCodeClone;
