import path from 'path';
import glob from 'glob';
import { mount } from 'enzyme';

describe('Storybook', () => {
    // find all storybook files
    const pagesPaths = glob.sync('!(node_modules)/**/*.stories.js');

    // iterate over pages
    for (const pagePath of pagesPaths) {
        // get story content
        const page = require(path.resolve(pagePath));

        describe(`page "${page.default.title}"`, () => {
            // get story views
            const stories = Object.keys(page).filter(key => key !== 'default');

            // iterate over stories
            for (const story of stories) {
                describe(`story "${story}"`, () => {
                    // get component by the view name
                    const component = page[story];

                    it('should not throw any error', () => {
                        // mock console.error
                        jest.spyOn(global.console, 'error');

                        // mount view passing the props
                        mount(component(component.args));

                        // check that no errors occurred
                        expect(console.error).not.toHaveBeenCalled();
                    });
                });
            }
        });
    }
});
