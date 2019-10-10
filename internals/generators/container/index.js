const containerDir = '../../src/containers/{{name}}';
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Generate a container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name of container:',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? `Container (${value}) already exists.`
            : true;
        }

        return 'Container name is required.';
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${containerDir}/index.ts`,
      templateFile: './container/index.ts.hbs',
    },
    {
      type: 'add',
      path: `${containerDir}/{{name}}.tsx`,
      templateFile: './container/Container.tsx.hbs',
    },
    {
      type: 'add',
      path: `${containerDir}/types.ts`,
      templateFile: './container/types.ts.hbs',
    },
    {
      type: 'add',
      path: `${containerDir}/{{name}}.spec.tsx`,
      templateFile: './container/Container.spec.tsx.hbs',
    },
    {
      type: 'add',
      path: `${containerDir}/{{name}}Context.ts`,
      templateFile: './container/ContainerContext.ts.hbs',
    },
    {
      type: 'add',
      path: `${containerDir}/Loadable.tsx`,
      templateFile: './container/Loadable.tsx.hbs',
    },
  ],
};
