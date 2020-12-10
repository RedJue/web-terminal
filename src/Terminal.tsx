import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { useEffect } from "react";
import React from "react";
function VscodeTerminal() {
  useEffect(() => {
    var term = new Terminal();
    //@ts-ignore
    term.open(document.getElementById("terminal"));
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  }, []);
  return <div id="terminal"></div>;
}

export default VscodeTerminal;
