import { useState, useEffect } from "react";

const movies = [
  {
    name: "INCEPTION",
    hints: [
      "Directed by Christopher Nolan.",
      "Involves dreams within dreams.",
      "Leonardo DiCaprio plays the lead role."
    ],
    revealedLetters: ["I", "E", "T"]
  },
  {
    name: "AVATAR",
    hints: [
      "Directed by James Cameron.",
      "Set on the alien world of Pandora.",
      "Blue-skinned characters called Na'vi."
    ],
    revealedLetters: ["A", "V"]
  },
  {
    name: "INTERSTELLAR",
    hints: [
      "Space travel through a wormhole.",
      "Time dilation and relativity.",
      "Matthew McConaughey stars in it."
    ],
    revealedLetters: ["I", "T", "R"]
  }
];

export default function App() {
  const [movie, setMovie] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [input, setInput] = useState("");
  const [chances, setChances] = useState(5);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setupNewGame();
  }, []);

  const setupNewGame = () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(randomMovie);
    setGuessedLetters(randomMovie.revealedLetters);
    setChances(5);
    setInput("");
    setStatus("");
  };

  const handleGuess = () => {
    if (!input || !movie || chances <= 0) return;

    const guess = input.trim().toUpperCase();
    setInput("");

    if (guess.length > 1) {
      if (guess === movie.name) {
        setGuessedLetters([...new Set(movie.name.split(""))]);
        setStatus("🎉 Correct! You guessed the movie!");
      } else {
        setChances((prev) => prev - 1);
        setStatus("❌ Wrong movie name!");
      }
    } else {
      if (guessedLetters.includes(guess)) {
        setStatus("⚠️ Already guessed!");
      } else if (movie.name.includes(guess)) {
        setGuessedLetters((prev) => [...prev, guess]);
        setStatus("✅ Good guess!");
      } else {
        setChances((prev) => prev - 1);
        setStatus("❌ Wrong letter!");
      }
    }
  };

  const isGameWon = movie && movie.name.split("").every((letter) => guessedLetters.includes(letter));
  const isGameOver = chances === 0 && !isGameWon;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center">🎬 Movie Guessing Game</h1>

        {movie && (
          <>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Hints:</h2>
              <ul className="list-disc ml-6">
                {movie.hints.map((hint, idx) => (
                  <li key={idx}>{hint}</li>
                ))}
              </ul>
            </div>

            <div className="text-3xl tracking-widest text-center mb-4">
              {movie.name.split("").map((letter, idx) => (
                <span key={idx} className="inline-block w-6">
                  {guessedLetters.includes(letter) ? letter : "_"}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mb-4 justify-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 w-2/3"
                placeholder="Guess a letter or full name"
                disabled={isGameWon || isGameOver}
              />
              <button
                onClick={handleGuess}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                disabled={isGameWon || isGameOver}
              >
                Guess
              </button>
            </div>

            <div className="text-center text-lg mb-2">{status}</div>

            <div className="text-center font-bold mb-4">
              {isGameWon
                ? "🎉 You Won!"
                : isGameOver
                ? `💔 Game Over! The movie was: ${movie.name}`
                : `Chances left: ${chances}`}
            </div>

            {(isGameWon || isGameOver) && (
              <div className="flex justify-center">
                <button
                  onClick={setupNewGame}
                  className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                >
                  🔁 Play Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
