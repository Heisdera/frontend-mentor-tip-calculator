import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --strong-cyan: hsl(172, 67%, 45%);
  --very-dark-cyan: hsl(183, 100%, 15%);
  --dark-grayish-cyan: hsl(186, 14%, 43%);
  --grayish-cyan: hsl(184, 14%, 56%);
  --light-grayish-cyan: hsl(185, 41%, 84%);
  --very-light-grayish-cyan: hsl(189, 41%, 97%);
  --white-color: #fff;
  --inputs-font: 24px;

  --attribution-blue: #3e52a3;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.2s, border 0.2s;
}

body {
  font-family: 'Space Mono', monospace;
  min-height: 100vh;
  line-height: 1.5;
  background-color: var(--light-grayish-cyan);
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-grayish-cyan);
}

button,
input {
  border: none;
  outline: none;
  padding: 12px 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: var(--inputs-font);
}

.hide {
  display: none;
}

.selected {
  background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
}

.error {
  outline: 2px solid coral;
}

.error:focus {
  outline: 2px solid coral;
}
`;

export default GlobalStyles;
