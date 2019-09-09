import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  return (
    <div className="p-5 h-screen flex flex-col justify-center">
      <div className="flex-shrink container w-1/2 mx-auto p-5 shadow">
        <h1 className="text-2xl">React + TailwindCSS</h1>
        <p className="my-4">
          This is a super simple boilerplate project that includes React and
          TailwindCSS.
        </p>
        <a
          className="px-3 py-2 rounded bg-white border border-blue-500 hover:bg-blue-700 hover:text-white inline-block"
          href="https://github.com/zpritchett/react-tailwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
