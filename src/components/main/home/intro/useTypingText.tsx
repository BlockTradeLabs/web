import { useState, useEffect, useRef } from "react";

const FORWARD = "forward";
const BACKWARD = "backward";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks
 */
export const useTypingText = (
  words: string[],
  keySpeed = 500,
  maxPauseAmount = 20
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[wordIndex].split(""));
  const [isStopped, setIsStopped] = useState(false);
  const direction = useRef(BACKWARD);
  const typingInterval = useRef(setInterval(() => {}));
  const letterIndex = useRef(5);
  const [firstRun, setFirstRun] = useState(true);

  const stop = () => {
    clearInterval(typingInterval.current);
    setIsStopped(true);
  };

  useEffect(() => {
    // Start at 0
    let pauseCounter = 0;
    if (firstRun) {
      //delay for 5 seconds
      setTimeout(() => {
        setFirstRun(false);
      }, 4000);
      return;
    }

    if (isStopped) return;

    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = BACKWARD;

        // Begin pause by setting the maxPauseAmount prop equal to the counter
        pauseCounter = maxPauseAmount;
        return;
      }

      const segment = words[wordIndex].split("");
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    };

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;

        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = FORWARD;

        return;
      }

      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    };

    typingInterval.current = setInterval(() => {
      // Wait until counter hits 0 to do any further action
      if (pauseCounter > 0) {
        pauseCounter = pauseCounter - 1;
        return;
      }

      if (direction.current === FORWARD) {
        typeLetter();
      } else {
        backspace();
      }
    }, keySpeed);

    return () => {
      clearInterval(typingInterval.current);
    };
  }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount, isStopped]);

  return {
    word: (
      <span className={`word ${currentWord.length ? "full" : "empty"}`}>
        <span>{currentWord.length ? currentWord.join("") : ""}</span>
      </span>
    ),
    start: () => setIsStopped(false),
    stop,
  };
};
