import { useState } from "react";
import {
  Button,
  Text,
  Stack,
  Title,
  Image,
  Paper,
  TextInput,
  Divider,
} from "@mantine/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <Stack
      align="center"
      justify="center"
      spacing="xl"
      style={{ padding: 40, minHeight: "100vh", backgroundColor: "#1a1b1e" }}
    >
      <Paper shadow="md" radius="md" p="xl" withBorder style={{ width: 400 }}>
        <Stack spacing="md" align="center">
          <div style={{ display: "flex", gap: 20 }}>
            <Image src={viteLogo} alt="Vite logo" width={50} />
            <Image src={reactLogo} alt="React logo" width={50} />
          </div>

          <Title order={2}>Mantine UI Demo</Title>

          <TextInput
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            label="Enter your name"
          />

          <Divider my="sm" />

          <Button
            onClick={() => setCount((c) => c + 1)}
            color="violet"
            fullWidth
            radius="md"
            size="md"
          >
            Clicked {count} times
          </Button>
          {/*・name && (...): name に文字列があるときだけ <Text> を表示（＝条件付きレンダリング） 
             ・name が空文字（""）なら、表示されない*/}
          {name && (
            <Text color="dimmed" size="sm">
              Hello, <strong>{name}</strong>!
            </Text>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}

export default App;
