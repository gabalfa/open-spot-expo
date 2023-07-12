import { render, screen, fireEvent } from "@testing-library/react-native";
import { Linking } from "react-native";
import { Header } from "../components/Header"

test("should render the label of the header", () => {
  const { getByText } = render(
    <Header />
  );

  const label = getByText("Ready to ride an Open Spot?")
  expect(label).toBeTruthy();
});

// voy a iniciar un proyecto "Hello world", instalando todo lo indicado en la documentación testing y el proyecto de ejemplo
// le voy incluyendo el codigo de open spot hasta que falle