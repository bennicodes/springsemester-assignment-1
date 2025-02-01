const fetchCharacters = async () => {
  try {
    const response = await fetch("http://localhost:3001/characters");
    const data = await response.json();

    const transformData = (characters) => {
      return characters.slice(0, 6).map((character) => ({
        name: character.name,
        height: `${character.height} cm`,
        mass: `${character.mass} kg`,
        birth_year: character.birth_year,
        gender: character.gender,
      }));
    };

    const characterObjects = transformData(data);
    console.log("Transformed Characters:", characterObjects);

    return characterObjects;
  } catch (error) {
    console.log("Failed to fetch Star Wars Characters:", error);
    return [];
  }
};

export default fetchCharacters;
