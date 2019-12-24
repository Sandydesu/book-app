module.exports = {
  name: 'book-clent',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/book-clent',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
