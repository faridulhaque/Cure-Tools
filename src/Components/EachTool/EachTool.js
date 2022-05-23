import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EachTool = () => {
  const { eachTool } = useParams();
  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${eachTool}`)
    .then((res) => res.json())
    .then((data) => {setTool(data)});
  }, []);
  return (
    <div>
      <h2>tool no: {eachTool} </h2>
      <h2>{tool.name}</h2>
    </div>
  );
};

export default EachTool;
