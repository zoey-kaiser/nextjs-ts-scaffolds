# Component Library Scaffold

```bash
$ yarn install

$ yarn run dev // Opens Storybook

$ yarn run test
$ yarn run lint

$ yarn run build
```

## Development
When developing a new Component create a new folder for the component in the `/components` folder.

Inside each component folder the following files must exist:
- React file
- Type file
- Storybook file

### Types
Every React Component needs to come with type declaration, as we develop our pages in 
TypeScript. 

Example type file:
```ts
// ExampleTypes.ts

import React, {MouseEventHandler} from "react";

export interface ExampleProps {
    string?: string, // String Type
    boolean?: boolean, // Boolean Type
    children?: React.ReactNode, // Children inside the component
    onClick?: MouseEventHandler<HTMLButtonElement>, // Click event
    select: "option1" | "option2" | "option3" | "option4", // Selection from differnet options
}
```
_Note: Add a `?` after the variable name if it can also be left as undefined._

### Storybook
As this project does not require an existing website we develop components with
[Storybook](https://storybook.js.org/). A framework that lets us easily develop and preview
React Components.

In order to start Storybook use the command

```shell
yarn dev
```

Example Storybook file:

```js
// ExampleComponent.stories.js

// Import your Component
import React from 'react';
import { ExampleComponent } from "./ExampleComponent";

// Export a default function
// This is where you define your components and what props are needed
// All other argTypes can be found here: https://storybook.js.org/docs/react/essentials/controls#annotation
export default {
    title: 'Guides/Example Component',
    component: ExampleComponent,
    argTypes: {
        // Add a color selection
        color: { control: 'color' },
        // Add a select dropdown (Can be removed and set in the React Component)
        size: { control: { type: 'select', options: ['text-sm', 'text-lg', 'text-2xl'] } },
        // Actions can be used to mock functions. More info: https://storybook.js.org/docs/react/essentials/actions
        testFunction: { action: "testFunction" }
    },
};

// Create a default Template
const Template = (args) => <ExampleComponent {...args} />;

// For each version of the Component create a new story
export const Default = Template.bind({});
// You can change the args and props to modify the story here
Default.args = {
    label: 'Test Text',
    color: 'black'
};
```
More helpful links: [Storybook Getting started guide](https://storybook.js.org/docs/react/writing-stories/introduction)
