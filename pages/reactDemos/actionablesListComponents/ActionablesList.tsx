import Loading from "../Loading";
import {ActionablesLIProps} from "./ActionablesLI";

const ulStyle: React.CSSProperties = {
  display: "inline",
  overflowY: "scroll",
}

interface ActionablesListProps {
  contentName: string;
  ListItem: (props: ActionablesLIProps) => JSX.Element;
  data: null | any[];
  isValid: boolean;
}

// you don't change this much
const ActionablesList = (props: ActionablesListProps) => {
  const { contentName, ListItem, data, isValid } = props;

  const list =
    isValid && data ? (
      data.map((datum: number, i: number) => {
        return (
          <ListItem key={""+i} index={i} datum={datum}/>
        );
      })
    ) : (
      <Loading contentName={contentName} />
    );

  return <ul className="item-list" style={ulStyle}>{list}</ul>;
};

export default ActionablesList;