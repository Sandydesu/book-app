module.exports = {
  name: 'store-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/store-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
