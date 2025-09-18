import { styled } from "../styled-system/jsx";

const Box = styled("div");

export const Debug = () => {
  return (
    <Box bg="teal.200" p="4">
      デバッグボックス
    </Box>
  );
};
