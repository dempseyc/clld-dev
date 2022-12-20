interface Props {
  contentName: string;
}

const Loading = (props: Props) => {
  const {contentName} = props;
  return (
     <div className={`loading-${contentName}`}>{`...loading ${contentName}...`}</div>
  );
}

export default Loading

