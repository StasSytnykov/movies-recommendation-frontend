import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../components";
import { movies } from "./stub";
import { Props } from "../components/MovieCard";

export default {
  title: "Example/MovieCard",
  component: MovieCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args: Props) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
  onCardSelect: () => {},
};
