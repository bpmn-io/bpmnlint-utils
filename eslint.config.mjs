import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  ...bpmnIoPlugin.configs.recommended,
  ...bpmnIoPlugin.configs.mocha.map((config) => {
    return {
      ...config,
      files: [ 'test/**/*.js' ]
    };
  }),
  {
    ignores: [
      'dist'
    ]
  }
];