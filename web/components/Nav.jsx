import Link from "next/link";
import styles from "../styles/components/Nav.module.scss";

import { useThemeStateContext } from "../context/themeState";

export default function Nav() {
  const { theme, setTheme } = useThemeStateContext();

  return (
    <>
      <header
        className={`${styles.header} ${theme.mode === "light" ? "invent" : ""}`}
      >
        <nav>
          <Link href="/">
            <a>Nick John - wip</a>
          </Link>
          <a href="#">Work</a>
          <a href="#">Contact</a>
          <button
            onClick={() => {
              if (theme.mode === "dark") {
                setTheme({ mode: "light" });
              } else {
                setTheme({ mode: "dark" });
              }
            }}
            className={
              theme.mode === "light" ? styles.buttonLight : styles.buttonDark
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 39 21"
            >
              <g clipPath="url(#a)">
                <path d="M28.6 0H10.4C4.665 0 0 4.71 0 10.5S4.665 21 10.4 21h18.2C34.334 21 39 16.29 39 10.5S34.334 0 28.6 0ZM10.4 18.375a7.771 7.771 0 0 1-5.513-2.309A7.922 7.922 0 0 1 2.6 10.5a7.922 7.922 0 0 1 2.287-5.566A7.77 7.77 0 0 1 10.4 2.625h11.344a10.46 10.46 0 0 0-2.616 3.55A10.55 10.55 0 0 0 18.2 10.5c.001 1.492.318 2.966.93 4.325a10.46 10.46 0 0 0 2.615 3.55H10.4Zm18.2 0a7.771 7.771 0 0 1-5.513-2.309A7.922 7.922 0 0 1 20.8 10.5a7.922 7.922 0 0 1 2.287-5.566A7.77 7.77 0 0 1 28.6 2.625a7.771 7.771 0 0 1 5.513 2.31A7.923 7.923 0 0 1 36.4 10.5a7.923 7.923 0 0 1-2.287 5.566 7.771 7.771 0 0 1-5.513 2.309Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h39v21H0z" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}
