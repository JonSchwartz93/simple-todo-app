import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>
);
