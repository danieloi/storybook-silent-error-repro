// without import React, it will fail silently
// if we use the children arg
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Text, View } from "react-native"; 
import { PressableScale } from "./pressable-scale";

const meta = {
  component: PressableScale,
  title: "Components/PressableScale",
  decorators: [
    (Story) => (
      <View className="p-4">
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PressableScale>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Text className="text-white text-center font-semibold">Hello</Text>,
    className: "bg-blue-500 p-3 rounded-lg",
  },
};