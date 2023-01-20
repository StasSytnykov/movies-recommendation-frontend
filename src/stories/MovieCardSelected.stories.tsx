import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCardSelected } from "../components";
import { movies } from "./stub";
import { Props } from "../components/MovieCardSelected";

export default {
  title: "Example/MovieCardSelected",
  component: MovieCardSelected,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args: Props) => (
  <MovieCardSelected {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
  onDeleteMovie: () => {},
};
