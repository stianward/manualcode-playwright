module.exports = {
  default: {
    require: [
      'features/step-definitions/**/*.ts',
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:cucumber-report.html',
      'json:cucumber-report.json',
    ],
    formatOptions: {
      snippetInterface: 'async-await',
    },
    parallel: 2,
    timeout: 60000,  // Timeout de 60 segundos para pasos individuales
  },
};
