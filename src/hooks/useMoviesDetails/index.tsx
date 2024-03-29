import { useState } from "react";
import { IMovie } from "../../conteiners/Movies";

interface ChooseMovie extends IMovie {
  overview: string;
  runtime: number;
}

export const useMoviesDetails = () => {
  const [chooseMovie, setChooseMovie] = useState<ChooseMovie>();
};
