import React from "react";

function DarkMode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; //html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [element.classList, theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src="https://shopsy-tcj.netlify.app/assets/light-mode-button-X4OXHFfW.png"
        className={`${theme === 'dark' ? 'opacity-0' : 'opacity-100'} cursor-pointer w-12 drop-shadow(1px 1px 1px rgba(0,0,0,0.1)] 
        transition-all duration-300 absolute right-0 z-10`}
        alt="lightPng"
      />
      <img
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src="https://shopsy-tcj.netlify.app/assets/dark-mode-button-85jBkhOs.png"
        className="cursor-pointer w-12 drop-shadow(1px 1px 1px rgba(0,0,0,0.1)] 
        transition-all duration-300"
        alt="lightPng"
      />
    </div>
  );
}

export default DarkMode;
