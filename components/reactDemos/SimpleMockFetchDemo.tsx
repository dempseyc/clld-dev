import { useEffect, useState, useCallback } from "react";
import Loading from "./Loading";

const exampleData = () => {
  return Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 20)
  });
};

const backendSimulation = (success: boolean, timeout: number) => {
  return new Promise((resolve, reject) => {
    const data = exampleData();
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject({ message: "Error" } as unknown);
      }
    }, timeout);
  });
};

const useData = () => {
  const [data, setData] = useState(null as null | any[]);
  const [validAt, setValidAt] = useState(0);
  const [invalidAt, setInvalidAt] = useState(new Date().getTime());
  const isValid = validAt > invalidAt;
  const fetchData = useCallback( async () => {
    try {
      const response = await backendSimulation(true, 200);
      setData(response as null | any[]);
      setValidAt(new Date().getTime());
    } catch (error) {
      console.log(error);
    }
  },[]);
  useEffect(() => {
    if (!isValid) {
      fetchData();
    }
  }, [fetchData, isValid]);
  const refetch = () => {
    setInvalidAt(new Date().getTime());
  };
  return { data, isValid, refetch };
};

{
  /* END SETUP */
}

{
  /* STYLES */
}

const h1Style: React.CSSProperties = {
  textAlign: "center",
  fontSize: "2em",
};

const containerStyle: React.CSSProperties = {
  border: "8px solid magenta",
  textAlign: "center",
  height: "70vh",
  overflowY: "scroll",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5em",
  margin: "0.5em",
  border: "2px solid magenta",
  borderRadius: "0.25em",
};

{
  /* END STYLES */
}

const SimpleMockFetchDemo = () => {
  const { data, isValid, refetch } = useData();
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => refetch()}>{`refetch`}</button>
      {data && isValid ? (
        data?.map((datum, i) => {
          return (
            <p key={i}>
              <h1 style={h1Style}>{`${datum}`}</h1>
            </p>
          );
        })
      ) : (
        <Loading contentName={`numbers`} />
      )}
    </div>
  );
};

export default SimpleMockFetchDemo;
