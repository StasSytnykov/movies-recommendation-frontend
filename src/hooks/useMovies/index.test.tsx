import { renderHook, act } from "@testing-library/react";
import { useMovies, MAX_SELECTED_MOVIES } from "./index";

describe("useMovies hook", () => {
  const basicMovie = {
    id: 1,
    title: "Test",
    releaseDate: "123",
    genres: [
      {
        id: 1,
        name: "test",
      },
    ],
  };

  it("should select movie", () => {
    const { result } = renderHook(useMovies);
    act(() => result.current.selectMovie(basicMovie));
    expect(result.current.selectedMovies.length).toBe(1);
  });

  it("should selected movies id = basicMovie id", () => {
    const { result } = renderHook(useMovies);
    act(() => result.current.selectMovie(basicMovie));
    expect(result.current.selectedMovies[0].id).toBe(basicMovie.id);
  });

  it("should delete movie", () => {
    const { result } = renderHook(useMovies);
    act(() => result.current.deleteMovie(1));
    expect(result.current.selectedMovies.length).toBe(0);
  });

  it("should select movie only one", () => {
    const { result } = renderHook(useMovies);
    act(() => result.current.selectMovie(basicMovie));
    act(() => result.current.selectMovie(basicMovie));
    expect(result.current.selectedMovies.length).toBe(1);
  });

  it("should add no more movies than it is allowed", () => {
    const { result } = renderHook(useMovies);
    for (let i = 0; i < MAX_SELECTED_MOVIES; i++) {
      act(() => {
        result.current.selectMovie({ ...basicMovie, id: i });
      });
    }
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);
  });

  it("should add max 20 movies", () => {});
});
