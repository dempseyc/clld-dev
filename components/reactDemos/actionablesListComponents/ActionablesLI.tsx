import { useContext } from "react";

import { ActionablesContext } from "./ActionablesListDemo";

export interface ActionablesLIProps {
  index: number;
  datum: any;
}

const liStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5em",
  border: "1px solid pink",
}

const buttonStyle: React.CSSProperties = {
  padding: "0.5em",
  margin: "0.5em",
  border: "2px solid Pink",
  borderRadius: "0.25em",
}

const h2Style: React.CSSProperties = {
  textAlign: "center",
  fontSize: "1.5em",
}

// make list items that do what you need, then pass it as ListItem prop of List
const ActionablesLI = (props: ActionablesLIProps) => {
  const { index, datum } = props;
  const ctx = useContext(ActionablesContext);
  const actions = ctx?.actions ?? {};
  const buttons = Object.keys(actions).map((key, i) => {
    return (
      <button
        key={i}
        onClick={() => actions[key](datum)}
        style={buttonStyle}
      >{""+key}</button>
    );
  });
  return (
    <li key={index} style={liStyle}>
      <h2 style={h2Style}>{datum}</h2>
      <div>{buttons}</div>
    </li>
  );
};

export default ActionablesLI