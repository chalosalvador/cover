const initComponent = (
  'import React, { useState, useEffect } from "react";\n' +
  "\n" +
  "const TicTacToe = () => {\n" +
  "\n" +
  "  return (\n" +
  '    <div className="tictactoe">\n' +
  "\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default TicTacToe;"
).split("");

const cellsState = "  const [cells, setCells] = useState(new Array(9).fill(null));\n".split(
  ""
);

const createGrid = (
  '      <div className="tictactoe__board">\n' +
  "        {cells.map((_, i) => (\n" +
  "          <div key={i}>\n" +
  "            {cells[i]}\n" +
  "          </div>\n" +
  "        ))}\n" +
  "      </div>"
).split("");

const includeCSS = 'import "../styles/TicTacToe.css";\n'.split("");

const initCSS = (
  ".tictactoe__board {\n" +
  "  display: grid;\n" +
  "  grid-template-columns: 100px 100px 100px;\n" +
  "  grid-template-rows: 100px 100px 100px;\n" +
  "}\n" +
  "\n" +
  ".tictactoe__board div:nth-child(-n+6) {\n" +
  "  border-bottom: 1px solid #000000;\n" +
  "}\n" +
  "\n" +
  ".tictactoe__board div:nth-child(3n+2) {\n" +
  "  border-right: 1px solid #000000;\n" +
  "  border-left: 1px solid #000000;\n" +
  "}"
).split("");

const gameState = (
  "  const [isCircle, setIsCircle] = useState(true);\n" +
  "  const [winner, setWinner] = useState(null);\n"
).split("");

const gameHeader = (
  "      <div className='tictactoe__header'>\n" +
  // eslint-disable-next-line no-template-curly-in-string
  '        {!winner ? `Turno de ${isCircle ? "O" : "X"}` : `WINNER: ${winner}`}\n' +
  "      </div>\n"
).split("");

const handleClick = (
  "\n" +
  "  const handleClick = (index) => {\n" +
  "    const currentCell = cells[index];\n" +
  "    if (!winner && currentCell === null) {\n" +
  "      const newCells = [...cells];\n" +
  '      newCells[index] = isCircle ? "O" : "X";\n' +
  "      setCells(newCells);\n" +
  "      setIsCircle(!isCircle);\n" +
  "    }\n" +
  "  };\n"
).split("");

const winOptions = (
  "\n" +
  "const winOptions = [\n" +
  "  [0, 1, 2],\n" +
  "  [3, 4, 5],\n" +
  "  [6, 7, 8],\n" +
  "  [0, 3, 6],\n" +
  "  [1, 4, 7],\n" +
  "  [2, 5, 8],\n" +
  "  [0, 4, 8],\n" +
  "  [2, 4, 6],\n" +
  "];\n"
).split("");

const verifyWinner = (
  "\n" +
  "  useEffect(() => {\n" +
  "    const verifyWinner = () => {\n" +
  "      winOptions.forEach((winCells) => {\n" +
  "        const [a, b, c] = winCells;\n" +
  "        if (cells[a] !== null) {\n" +
  "          if (cells[a] === cells[b] && cells[b] === cells[c]) {\n" +
  "            setWinner(cells[a]);\n" +
  "          }\n" +
  "        }\n" +
  "      });\n" +
  "    };\n" +
  "\n" +
  "   verifyWinner();\n" +
  "  }, [cells]);\n"
).split("");

const onClick = " onClick={() => handleClick(i)}".split("");

const steps = [
  {
    type: "js",
    outro: `¡Hola! 👋 Mi nombre es <strong>Chalo Salvador</strong> y <strong>desarrollo aplicaciones web y móviles</strong>.`.split(
      ""
    ),
    outroWaitTime: 2000,
    code: [],
  },
  {
    type: "js",
    outro: "Actualmente, lidero un gran equipo de desarrolladores en <strong>Grupo Menta</strong> 👩‍💻👨‍💻".split(
      ""
    ),
    outroWaitTime: 2000,
    code: [],
  },
  {
    type: "js",
    outro: "Me gustaría mostrarte un poco de lo que hacemos. Así que, si estás buscando un <strong>equipo de desarrollo</strong>, sabes que <strong>puedes contar con nosotros</strong> 😉".split(
      ""
    ),
    outroWaitTime: 3000,
    code: [],
  },
  {
    type: "js",
    outro: "Pero no quiero mostrarte solo el resultado final, <strong>quiero que experimentes el proceso</strong> de desarrollo de una aplicación web y lo emocionante que es 🤩".split(
      ""
    ),
    outroWaitTime: 3000,
    code: [],
  },
  {
    type: "js",
    outro: "Así que, te propongo que me acompañes a crear un <strong>3 en raya</strong>.".split(
      ""
    ),
    outroWaitTime: 3000,
    code: [],
  },
  {
    type: "js",
    outro: "Ahora, nos verás <strong>escribir el código en tiempo real</strong> 🤓".split(
      ""
    ),
    outroWaitTime: 2000,
    code: [],
  },
  {
    type: "js",
    outro: "¿Empezamos?".split(""),
    outroWaitTime: 2000,
    code: [],
    callback: () => {
      document.querySelector(".app__comments").style.minHeight = "106px";
      document.querySelector(".app__sections").style.height =
        "calc(100vh - 150px)";
      document.querySelector(".app__comments #html").style.paddingBottom = 0;
      document.querySelector(".app__comments .menta-link").style.fontSize =
        "1.3rem";
    },
  },
  {
    type: "js",
    startAtRow: 0,
    startAtCol: 0,
    intro: "Muy bien, empecemos creando la estructura de nuestro componente...".split(
      ""
    ),
    code: initComponent,
    outro: "hmm, nada que parezca muy interesante por ahora 😒 pero debemos empezar por algo 😉 ...".split(
      ""
    ),
    outroWaitTime: 3000,
  },
  {
    type: "js",
    startAtRow: 3,
    startAtCol: 0,
    intro: "Ahora vamos a empezar a crear algo en la pantalla 😃".split(""),
    code: cellsState,
  },
  {
    type: "js",
    startAtRow: 7,
    startAtCol: 0,
    code: createGrid,
    outro: "¿Parece complicado? naah para nada...".split(""),
    outroWaitTime: 2000,
  },
  {
    type: "js",
    startAtRow: 1,
    startAtCol: 0,
    intro: "Ahora, para que estos elementos se vean en pantalla debemos aplicarle algo de estilos 💅, así que vamos a escribir algo de CSS.".split(
      ""
    ),
    code: includeCSS,
  },
  {
    type: "css",
    startAtRow: 0,
    startAtCol: 0,
    code: initCSS,
    outro: "Bien, ahora si, veamos en qué se traduce este código en la pantalla...".split(
      ""
    ),
    outroWaitTime: 2000,
    showGame: true,
  },
  {
    type: "js",
    intro: "¡Genial! ya tenemos la cuadrícula de nuestro 3 en raya 🎉".split(
      ""
    ),
    code: [],
    outro: "Pero aún no hace nada 😔. Agreguemos la lógica del juego...".split(
      ""
    ),
  },
  {
    type: "js",
    startAtRow: 5,
    startAtCol: 0,
    code: gameState,
  },
  {
    type: "js",
    startAtRow: 10,
    startAtCol: 0,
    code: ["\n"],
  },
  {
    type: "js",
    startAtRow: 10,
    startAtCol: 0,
    code: gameHeader,
    outro: "Esa es la cabecera del juego, ahora un poco más de código...".split(
      ""
    ),
    showHeader: true,
  },
  {
    type: "js",
    startAtRow: 7,
    startAtCol: 0,
    code: handleClick,
  },
  {
    type: "js",
    startAtRow: 25,
    startAtCol: 22,
    code: onClick,
    outro: "Bien, esto nos permite jugar, inténtalo 😉".split(""),
    outroWaitTime: 6000,
    allowHandleClick: true,
  },
  {
    type: "js",
    code: [],
    outro: "Debemos agregar un poco más de lógica al juego...".split(""),
  },
  {
    type: "js",
    startAtRow: 2,
    startAtCol: 0,
    code: winOptions,
  },
  {
    type: "js",
    startAtRow: 18,
    startAtCol: 0,
    code: verifyWinner,
    outro: "Ahora sí, tenemos la lógica del juego completa. Adelante, ¡pruébalo!".split(
      ""
    ),
    outroWaitTime: 5000,
    allowVerifyWinner: true,
  },
  {
    type: "css",
    startAtRow: 0,
    startAtCol: 0,
    intro: "Bien, ahora debemos hacer que nuestro juego se vea bien. Para eso necesitamos un poco más de CSS...".split(
      ""
    ),
    code: (
      ".tictactoe {\n" +
      "  position: relative;\n" +
      "  height: 500px;\n" +
      "}\n" +
      "\n"
    ).split(""),
    callback: () => {
      const el = document.querySelector(".tictactoe");
      el.style.position = "relative";
      el.style.height = "500px";
    },
  },
  {
    type: "css",
    startAtRow: 9,
    startAtCol: 0,
    code: (
      "  position: absolute;\n" +
      "  left: 50%;\n" +
      "  top: 50%;\n" +
      "  transform: translate(-50%, -50%);\n"
    ).split(""),
    outro: "Veamos el resultado...".split(""),
    outroWaitTime: 2000,
    callback: () => {
      const el = document.querySelector(".tictactoe__board");
      el.style.left = "50%";
      el.style.top = "50%";
      el.style.transform = "translate(-50%, -50%)";
    },
  },
  {
    type: "css",
    startAtRow: 23,
    startAtCol: 0,
    intro: "Continuemos, vamos a centrar los O y X en las celdas.".split(""),
    code: (
      "\n" +
      "\n" +
      ".tictactoe__board div {\n" +
      "  display: flex;\n" +
      "  justify-content: center;\n" +
      "  align-items: center;\n" +
      "  font-size: 52px;\n" +
      "}"
    ).split(""),
    outro: "Veamos el resultado...".split(""),
    outroWaitTime: 2000,
    callback: () => {
      const cells = document.querySelectorAll(".tictactoe__board div");
      cells.forEach((cell) => {
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.style.fontSize = "52px";
      });
    },
  },
  {
    type: "css",
    startAtRow: 2,
    startAtCol: 0,
    intro: "Ahora pongamos un poco de color...".split(""),
    code: "  background-color: rgba(62, 191, 172, 0.4);\n".split(""),
    outro: "Un poco de color de fondo...".split(""),
    // outroWaitTime: 2000,
    callback: () => {
      const cells = document.querySelectorAll(".tictactoe");
      cells.forEach((cell) => {
        cell.style.backgroundColor = "rgba(62, 191, 172, 0.4)";
      });
    },
  },
  {
    type: "css",
    startAtRow: 30,
    startAtCol: 0,
    // intro: "Ahora pongamos un poco de color...".split(""),
    code: "  border-color: rgb(62,191,172);\n  border-width: 7px;\n".split(""),
    outro: "Los bordes de la cuadrícula...".split(""),
    // outroWaitTime: 2000,
    callback: () => {
      const cells = document.querySelectorAll(".tictactoe__board div");
      cells.forEach((cell) => {
        cell.style.borderColor = "rgb(62, 191, 172)";
        cell.style.borderWidth = "7px";
      });
    },
  },
  {
    type: "js",
    startAtRow: 51,
    startAtCol: 22,
    intro: "¿Qué tal si hacemos que las O y las X sean de diferente color?".split(
      ""
    ),
    // eslint-disable-next-line no-template-curly-in-string
    code: " className={cells[i] && `item-${cells[i]}`}".split(""),
    // outro: "Bien, ahora vamos al CSS...".split(""),
    // outroWaitTime: 2000,
    callback: () => {
      const cells = document.querySelectorAll(".tictactoe__board div");
      cells.forEach((cell) => {
        cell.style.borderColor = "rgb(62, 191, 172)";
        cell.style.borderWidth = "7px";
      });
    },
  },
  {
    type: "css",
    startAtRow: 34,
    startAtCol: 0,
    code: (
      "\n" +
      "\n" +
      ".item-O {\n" +
      "  color: #ffffff;\n" +
      "}\n" +
      "\n" +
      ".item-X {\n" +
      "  color: #7e268e;\n" +
      "}"
    ).split(""),
    outro: "Vemos que pasa ahora...".split(""),
    // outroWaitTime: 2000,
    applyItemStyle: true,
  },
  {
    type: "css",
    startAtRow: 41,
    startAtCol: 0,
    intro: "Finalmente, acomodemos un poco la cabecera...".split(""),
    code: (
      "\n" +
      "\n" +
      ".tictactoe__header {\n" +
      "    text-align: center;\n" +
      "    padding: 30px;\n" +
      "    font-size: 32px;\n" +
      "    color: rgb(62, 191, 177);\n" +
      "    font-weight: bold;\n" +
      "}"
    ).split(""),
    outro: "Veamos el resultado...".split(""),
    callback: () => {
      const cells = document.querySelectorAll(".tictactoe__header");
      cells.forEach((cell) => {
        cell.style.textAlign = "center";
        cell.style.padding = "30px";
        cell.style.fontSize = "32px";
        cell.style.color = "rgb(62, 191, 177)";
        cell.style.fontWeight = "bold";
      });
    },
  },
  {
    type: "js",
    code: [],
    outro: "¡Listo! Nuestro 3 en raya está listo 🥳🎉".split(""),
    outroWaitTime: 4000,
  },
  {
    type: "js",
    outro: 'Si te gustó, imagina todo lo que podemos hacer por tí.<br>Contáctanos en <a href="mailto:info@grupomenta.com">info@grupomenta.com</a>, nos encantará conversar contigo 😉'.split(
      ""
    ),
    code: [],
    callback: () => {
      document.querySelector(".app__comments").style.minHeight =
        "calc(100vh - 40px)";
      document.querySelector(".app__sections").style.height = "0";
      document.querySelector(".app__comments #html").style.paddingBottom =
        "30%";
      document.querySelector(".app__comments .menta-link").style.fontSize =
        "2.5rem";
    },
  },
];

export default steps;
