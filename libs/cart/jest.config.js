module.exports = {
  name: 'cart',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cart',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
