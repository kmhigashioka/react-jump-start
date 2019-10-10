const componentDir = '../../src/components/{{name}}';
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Generate a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name of component:',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? `Component (${value}) already exists.`
            : true;
        }

        return 'Component name is required.';
      },
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${componentDir}/index.ts`,
      templateFile: './component/index.ts.hbs',
    },
    {
      type: 'add',
      path: `${componentDir}/{{name}}.tsx`,
      templateFile: './component/Component.tsx.hbs',
    },
    {
      type: 'add',
      path: `${componentDir}/types.ts`,
      templateFile: './component/types.ts.hbs',
    },
    {
      type: 'add',
      path: `${componentDir}/{{name}}.spec.tsx`,
      templateFile: './component/Component.spec.tsx.hbs',
    },
  ],
};
