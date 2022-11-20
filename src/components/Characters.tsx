import { useEffect, useState } from "react";

export const Characters = () => {
    const [characters, setCharacters] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/characters?limit=10")
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
                        View all the characters from The Walking Dead TV Show.
                    </p>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
                        {characters.map((character) => (
                            <div key={character.id} className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                                <h3 className="text-2xl font-bold">{character.Name}</h3>
                                <p className="text-lg font-bold">{character.Status}</p>
                                <p className="mt-4 text-base">Gender: {character.Gender}</p>
                                <p className="mt-4 text-base">Hair: {character.Hair}</p>
                                <p className="mt-4 text-base">First Appearance: {character.FirstAppearance}</p>
                                <p className="mt-4 text-base">Last Appearance: {character.LastAppearance}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
