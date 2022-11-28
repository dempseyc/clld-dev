import {useState, useEffect, useRef} from "react";

import {Heading} from "@chakra-ui/react";

const totalText = "CraigDempsey.com/dev"

const Char = (({val}:{val:string}) => {
  const [isNew, setIsNew] = useState(true);
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setIsNew(false);
    }, 100);
    return () => clearTimeout(timeout);
  },[])

  return (
    <span className={isNew?"char isNew":"char"}>{val}</span>
  )
});

const buildText = (chars: string[]) => {
  return (
    <span>
      {chars.map((char:string,i) => <Char key={i} val={char}/>)}
    </span>
  )
}

const BlinkingCursor = ({classes}) => {
  return (
    <span className={"cursor "+classes}>_</span>
  )
}

const AnimatedTitle = () => {
  const [endIndex, setEndIndex] = useState(-20);
  const [blink, setBlink] = useState(true);
  const jitter = Math.floor(Math.random() * 4) - 2;

  useEffect(() => {
    if (endIndex === totalText.length) {
      return;
    }
    const timeout = setTimeout(() => {
      setEndIndex((prev) => prev + 1);
    }, 150+(jitter*50));
    return () => clearTimeout(timeout);
  }, [endIndex]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 600);
    return () => clearTimeout(timeout2);
  },[blink])

  return (
    <Heading className="title" fontSize={["1.5rem", "3rem"]} fontWeight="light">
        {buildText(totalText.substring(0,endIndex).split(""))}
        <BlinkingCursor classes={blink? "on": "off"}/>
      </Heading>
  )
}

export default AnimatedTitle;