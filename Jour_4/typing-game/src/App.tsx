import { Typography } from "@mui/material"
import { useEffect, useState, useCallback } from "react"

function App() {

  const levels = [
    { alphabet: "abcdefgh", level: "Easy", points: 1, max: 100 },
    { alphabet: "abcdefghijklmnop", level: "Medium", points: 2, max: 200 },
    { alphabet: "abcdefghijklmnopqrstuvwxyz", level: "Hard", points: 3, max: 300 }
  ];

  const [levelIndex, setLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentLetter, setCurrentLetter] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [color, setColor] = useState("red");
  const [gameStarted, setGameStarted] = useState(false);

  const generateRandomLetter = useCallback(() => {
    return levels[levelIndex].alphabet[Math.floor(Math.random() * levels[levelIndex].alphabet.length)];
  }, [levelIndex]);

  const checkStartGame = useCallback((event: KeyboardEvent) => {
    if (event.key === " ") {
      setGameStarted(true);
    }
  }, []);

  useEffect(() => {
    setGeneratedLetter(generateRandomLetter());
  }, [generateRandomLetter]);

  useEffect(() => {
    if (score >= 100 && score < 200) {
      setLevelIndex(1);
    } else if (score >= 200) {
      setLevelIndex(2);
    }
  }, [score]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {

      if (event.key === generatedLetter) {
        setColor("green");
        setScore(prevScore => prevScore + levels[levelIndex].points);
        setGeneratedLetter(generateRandomLetter());
        setCurrentLetter(event.key);
      } else {
        setColor("red");
        setCurrentLetter(event.key);
      }
  }, [generatedLetter, levelIndex, generateRandomLetter]);

  useEffect(() => {
    const handleKeyDownWrapper = (event: KeyboardEvent) => {
      checkStartGame(event);
      if (gameStarted) {
        handleKeyDown(event);
      }
    };

    window.addEventListener('keydown', handleKeyDownWrapper);
    return () => {
      window.removeEventListener('keydown', handleKeyDownWrapper);
    };
  }, [checkStartGame, handleKeyDown, gameStarted]);

  return (
    <>
      <Typography component={'h1'} variant={'h2'}>
        TYPING GAME
      </Typography>
      {
        gameStarted ? (<><Typography component={'h2'} variant={'h4'}>
          Level: {levels[levelIndex].level} ({levels[levelIndex].alphabet.charAt(0)} - {levels[levelIndex].alphabet.charAt(levels[levelIndex].alphabet.length - 1)})
        </Typography><Typography sx={{ color: color }}>
            {currentLetter}
          </Typography><Typography>
            Press the letter: {generatedLetter}
          </Typography><Typography>
            Score: {score}
          </Typography></>) : <Typography>Press Space to start the game</Typography>
      }

    </>
  );
}

export default App;
