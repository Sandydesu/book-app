module.exports = {
  name: 'util-reusable',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/util/reusable',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
