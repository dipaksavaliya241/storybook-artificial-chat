import React from "react";
import MAvatar from "./Avatar";

export default {
  title: "UI/Avatar",
  component: MAvatar,
};

const AvatarStory = ({ ...args }) => <MAvatar {...args} />;

export const Avatar = AvatarStory.bind({});
