import React, { useState } from "react";
import { Python } from "@pyodide/pyodide";

function PythonCompiler() {
  const [output, setOutput] = useState("");

  const runPythonCode = async (code) => {
    try {
      // Load Pyodide
      await Python.load();

      // Execute Python code
      const pyCode = `
        ${code}
      `;
      const result = await Python.run(pyCode);

      // Update output state
      setOutput(result);
    } catch (error) {
      console.error(error);
      setOutput("Error occurred while executing Python code.");
    }
  };

  return (
    <div>
      <h1>Python Compiler</h1>
      <textarea
        rows="10"
        cols="50"
        onChange={(e) => setPythonCode(e.target.value)}
      />
      <button onClick={() => runPythonCode(pythonCode)}>Run</button>
      <div>
        <h2>Output</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default PythonCompiler;
