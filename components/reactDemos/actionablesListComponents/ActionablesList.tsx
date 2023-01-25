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

const ActionablesList = (props: ActionablesListProps) => {
  const { contentName, ListItem, data, isValid } = props;

  const list =
    isValid && data ? (
      // change the mapping function to match the ListItem and the data.
      // or abstract it out to props or context.
      data.map((datum: number, i: number) => {
        return (
          <ListItem key={i} index={i} datum={datum}/>
        );
      })
    ) : (
      <Loading contentName={contentName} />
    );

  return <ul className="item-list" style={ulStyle}>{list}</ul>;
};

export default ActionablesList;