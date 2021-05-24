import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      class={`h-screen w-full flex items-center justify-center bg-blue-50 flex-col ${
        darkMode && "bg-blue-900"
      }`}
    >
      <label class="switch">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span class="slider round"></span>
      </label>
      <div className="h-5/12 w-5/12 bg-gray-200 dark:bg-gray-900 p-5 rounded-lg mt-4 text-white">
        <h1 className="text-gray-800 dark:text-gray-200 font-extrabold text-3xl">
          Hello Dark Mode 👋
        </h1>
        <p className="text-gray-800 dark:text-gray-200 font-light mt-3 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit itaque
          dolorem officia beatae minus totam. Earum amet deserunt numquam
          molestias veniam excepturi dicta obcaecati
        </p>
        <button className="bg-white dark:bg-gray-800 py-2 px-3 font-bold text-blue-800 dark:text-white mt-3 rounded-md border border-gray-400 dark:border-gray-600">
          Button
        </button>
      </div>
    </div>
  );
};

export default App;
