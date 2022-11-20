import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

export const Characters = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://the-walking-dead-api.onrender.com/api/characters/random?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Characters</h1>
          <p className="mt-3 text-xl">
            These are just a few of the characters from The Walking Dead
            universe.
          </p>
          <p className="mt-3 text-xl underline">
            <Link to="/">Go back to homepage</Link>
          </p>
          <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
            {characters.map((character) => (
              <div
                key={character.id}
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">{character.Name}</h3>
                <p className="text-lg font-bold">{character.Status}</p>
                <img
                  src={character.Image.split("/revision")[0]}
                  alt={character.Name}
                />
                <p className="mt-4 text-base">Gender: {character.Gender}</p>
                <p className="mt-4 text-base">Hair: {character.Hair}</p>
                <p className="mt-4 text-base">
                  First Appearance: {character.FirstAppearance}
                </p>
                <p className="mt-4 text-base">
                  Last Appearance: {character.LastAppearance}
                </p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <p className="mt-3 text-xl underline">
                <a href="https://the-walking-dead-api.onrender.com/api/characters" target={'_blank'}>
                    View all characters
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
