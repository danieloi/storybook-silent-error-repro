import { Pressable, PressableProps } from "react-native";

export type PressableScaleProps = PressableProps & {
  scaleTo?: number;
  className?: string;
};

export function PressableScale({
  tw,
  disabled,
  ...props
}: PressableScaleProps) {
  return (
    <Pressable
      disabled={disabled}
      tw={[
        disabled ? "" : "duration-150 active:scale-95",
        Array.isArray(tw) ? tw.join(" ") : tw,
      ].join(" ")}
      {...props}
    />
  );
}
