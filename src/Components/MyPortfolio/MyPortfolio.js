import React from "react";

const MyPortfolio = () => {
  return (
    <div className="container">
      <h2 className="my-3">Name: Faridul Haque Murhsed</h2>
      <h3>Educational qualification: SSC (Bangladesh Open university)</h3>
      <h3>My skills as web developer</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node JS</li>
      </ul>
      <h2>My best project</h2>
      <ul>
        <li>
          <a target="_blank" href='https://assignment-11-ce30f.web.app/'>Fresh Fruit</a>
        </li>
        <li>
          <a target="_blank" href='https://assignment10-petsdoctor.web.app/'>Pets Doctor</a>
        </li>
      </ul>
    </div>
  );
};

export default MyPortfolio;
