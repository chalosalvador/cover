import { useState, useEffect, useCallback, useRef } from "react";
import "../styles/App.css";
import "../styles/TicTacToe.css";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import TicTacToe from "./TicTacToe";
import steps from "../utils/steps";

const App = () => {
  const jsEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const resultRef = useRef(null);
  const commentsHTMLRef = useRef(null);
  const [showGame, setShowGame] = useState(false);
  const [allowHandleClick, setAllowHandleClick] = useState(false);
  const [allowVerifyWinner, setAllowVerifyWinner] = useState(false);
  const [applyItemStyle, setApplyItemStyle] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const max = 10;
  const min = 10;

  const checkHTML = function (html) {
    const doc = document.createElement("div");
    doc.innerHTML = html;
    return doc.innerHTML === html;
  };

  const writeOutro = useCallback(() => {
    const step = steps[currentStep];
    commentsHTMLRef.current.innerHTML = "";
    let tmpTextContent = "";
    const interval = setInterval(() => {
      const char = step.outro.shift();
      tmpTextContent += char;

      if (checkHTML(tmpTextContent)) {
        commentsHTMLRef.current.innerHTML = tmpTextContent;
      } else {
        commentsHTMLRef.current.innerHTML += char;
      }

      if (step.outro.length === 0) {
        clearInterval(interval);
        setTimeout(() => {
          if (step.showGame !== undefined) {
            setShowGame(step.showGame);
          }

          if (step.allowHandleClick !== undefined) {
            setAllowHandleClick(step.allowHandleClick);
          }

          if (step.allowVerifyWinner !== undefined) {
            setAllowVerifyWinner(step.allowVerifyWinner);
          }

          if (step.applyItemStyle !== undefined) {
            setApplyItemStyle(step.applyItemStyle);
          }

          if (step.showHeader !== undefined) {
            console.log("SSHOWWW HEADDERERERER", step.showHeader);
            setShowHeader(step.showHeader);
          }

          if (step.callback) {
            step.callback();
          }

          setTimeout(() => {
            if (currentStep < steps.length - 1) {
              setCurrentStep((prevStep) => prevStep + 1);
            }
          }, step.outroWaitTime || 0);
        }, 1000);
      }
    }, 30);
  }, [currentStep]);

  const writeChar = useCallback(() => {
    const step = steps[currentStep];
    const editor =
      step.type === "js" ? jsEditorRef.current : cssEditorRef.current;
    const document = editor.getSession().getDocument();
    const waitTime = Math.random() * (max - min) + min;

    setTimeout(() => {
      if (step.code.length > 0) {
        const currentRow = step.startAtRow;
        const currentCol = step.startAtCol;
        let char = step.code.shift();

        editor.moveCursorTo(currentRow, currentCol);
        document.insert(
          {
            row: currentRow,
            column: currentCol,
          },
          char
        );

        if (document.isNewLine(char)) {
          step.startAtRow++;
          step.startAtCol = 0;
        } else {
          step.startAtCol += 1;
        }

        if (step.code.length > 0) {
          writeChar();
        } else {
          if (step.outro) {
            writeOutro();
          } else {
            if (currentStep < steps.length - 1) {
              setCurrentStep((prevStep) => prevStep + 1);
            }
          }
        }
      } else {
        if (step.outro) {
          writeOutro();
        } else {
          if (currentStep < steps.length - 1) {
            setCurrentStep((prevStep) => prevStep + 1);
          }
        }
      }
    }, waitTime);
  }, [currentStep, writeOutro]);

  const writeIntro = useCallback(() => {
    const step = steps[currentStep];

    commentsHTMLRef.current.innerHTML = "";
    let tmpTextContent = "";

    const interval = setInterval(() => {
      const char = step.intro.shift();
      tmpTextContent += char;
      console.log("tmpTextContent", checkHTML(tmpTextContent));
      if (checkHTML(tmpTextContent)) {
        commentsHTMLRef.current.innerHTML = tmpTextContent;
      } else {
        commentsHTMLRef.current.innerHTML += char;
      }

      if (step.intro.length === 0) {
        clearInterval(interval);
        setTimeout(() => {
          writeChar();
        }, 1000);
      }
    }, 30);
  }, [currentStep, writeChar]);

  useEffect(() => {
    if (jsEditorRef.current && cssEditorRef.current) {
      console.log("steps[currentStep]", steps[currentStep].intro);
      if (steps[currentStep].intro) {
        console.log("writeIntro");
        writeIntro();
      } else {
        writeChar();
      }
    }
  }, [currentStep, writeChar, writeIntro]);

  function onLoadJS(editor) {
    jsEditorRef.current = editor;
  }

  function onLoadCSS(editor) {
    cssEditorRef.current = editor;
  }

  return (
    <>
      <div className="app">
        <div className="app__comments">
          <div id="html" ref={commentsHTMLRef} />
          <div className="menta-link">
            <a
              href="https://grupomenta.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              grupomenta.com
            </a>
          </div>
        </div>

        <div className="app__sections">
          <div className="app__jscode">
            <h1>JavaScript (TicTacToe.js)</h1>
            <AceEditor
              mode="javascript"
              theme="monokai"
              onLoad={onLoadJS}
              name="js_editor"
              // editorProps={{ $blockScrolling: true }}
              wrapEnabled={true}
              readOnly
              value={jsEditorRef.current ? jsEditorRef.current.getValue() : ""}
              width="100%"
              height="calc(100vh - 106px)"
            />
          </div>

          <div className="app__csscode">
            <h1>CSS (TicTacToe.css)</h1>
            <AceEditor
              mode="css"
              theme="monokai"
              onLoad={onLoadCSS}
              name="css_editor"
              // editorProps={{ $blockScrolling: true }}
              wrapEnabled={true}
              readOnly
              value={
                cssEditorRef.current ? cssEditorRef.current.getValue() : ""
              }
              width="100%"
              height="calc(100vh - 106px)"
            />
          </div>

          <div className="app__result">
            <h1>Result</h1>
            <div ref={resultRef}>
              {showGame && (
                <TicTacToe
                  allowHandleClick={allowHandleClick}
                  allowVerifyWinner={allowVerifyWinner}
                  applyItemStyle={applyItemStyle}
                  showHeader={showHeader}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
