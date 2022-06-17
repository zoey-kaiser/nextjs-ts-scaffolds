module.exports = {
    stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-postcss", "@storybook/addon-controls", "@storybook/addon-actions"],
    core: {
        builder: "webpack5"
    }
};
