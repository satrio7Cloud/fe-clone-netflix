const API_KEY = "b18047a5dfaa17a862125bb158449ceb";

export const fetchGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
      options
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
