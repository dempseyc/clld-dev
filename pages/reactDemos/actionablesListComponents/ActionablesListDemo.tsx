import { useEffect, useState, createContext, useContext } from "react";
import ActionablesList from "./ActionablesList";
import ActionablesLI from "./ActionablesLI";

{/* SETUP */}

const exampleData = (success: boolean, timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(Array.from({length: 10}, () => Math.floor(Math.random()*20)));
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
  const fetchData = async () => {
    try {
      const response = await exampleData(true, 200);
      setData(response as null | any[]);
      setValidAt(new Date().getTime());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!isValid) {
      fetchData();
    }
  }, [fetchData, invalidAt])
  const refetch = () => { setInvalidAt(new Date().getTime()); }
  return { data, isValid, refetch };
};

{/* END SETUP */}

{/* STYLES */}

const h1Style: React.CSSProperties = {
  textAlign: "center",
  fontSize: "2em",
}

const containerStyle: React.CSSProperties = {
  height: "70vh",
  overflowY: "scroll",
}


{/* END STYLES */}

// you customize the actions and choose what kind of listItem you need here
type ContextType = {
  actions: { [key: string]: (...args: any[]) => void },
  count: number,
} | null

export const ActionablesContext = createContext(null as ContextType);

const ShowNumber = () => {
  const ctx = useContext(ActionablesContext);
  const count = ctx?.count ?? 0;
  return (
    <h1 style={h1Style}>{"current count: "+count}</h1>
  )
}

const ActionablesListDemo = () => {
  const [count, setCount] = useState(0);
  let { data, isValid, refetch } = useData();

  const actions = {
    increment_by: (num: number) => {
      setCount(count + num);
    },
    decrement_by: (num: number) => {
      setCount(count - num);
    },
    reset: () => {
      setCount(0);
    },
    fetch_new: () => {
      refetch();
    }
  };

  return (
    <ActionablesContext.Provider value={{count, actions}}>
    <ShowNumber/>
    <div style={containerStyle}>
      <ActionablesList
        contentName="numbers"
        ListItem={ActionablesLI} //each is consumer
        data={data}
        isValid={isValid}
        />
    </div>
    </ActionablesContext.Provider>
  );
};

export default ActionablesListDemo;