import { ComponentProps, useMemo } from "react";

import { MotiPressable } from "moti/interactions";
import { styled } from "nativewind";


export type PressableScaleProps = ComponentProps<typeof MotiPressable> & {
  scaleTo?: number;
  role?: string;
  className?: string;
};

const StyledMotiPressable = styled(MotiPressable);
export function PressableScale({
  scaleTo = 0.95,
  disabled,
  ...props
}: PressableScaleProps) {
  return (
    <StyledMotiPressable
      {...props}
      disabled={disabled}
      animate={useMemo(
        () =>
          ({ pressed }) => {
            "worklet";
            if (disabled) {
              return {};
            }
            return {
              scale: pressed ? scaleTo : 1,
            };
          },
        [disabled, scaleTo]
      )}
    />
  );
}
