import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmModal } from "../components";

export default {
  title: "Confirm Modal",
  component: ConfirmModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onCloseModal: () => {},
  url: "sad",
};
