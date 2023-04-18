import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShareModal } from "../components";

export default {
  title: "Confirm Modal",
  component: ShareModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ShareModal>;

const Template: ComponentStory<typeof ShareModal> = (args) => (
  <ShareModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  onCloseModal: () => {},
  url: "sad",
};
