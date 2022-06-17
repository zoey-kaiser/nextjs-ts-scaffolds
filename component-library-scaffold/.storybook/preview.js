import '../assets/styles/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
      <Story />
  ),
];
