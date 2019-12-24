module.exports = {
  name: 'ui-dashboard',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
