import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { FitAddon } from "xterm-addon-fit";

function TerminalComponent() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();
    term.write("Welcome to the VS Code Terminal!\r\n$ ");
  }, []);

  return <div ref={terminalRef} style={{ height: "30vh", backgroundColor: "#1e1e1e" }} />;
}

export default TerminalComponent;
