import SyntaxHighlighter from "react-syntax-highlighter";

const CodeContainer = (props = { code: "", language: "jsx" }) => {
  return (
    <SyntaxHighlighter language={props.language}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default CodeContainer;
