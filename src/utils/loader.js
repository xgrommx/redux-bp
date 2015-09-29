/* global require */

export function loadFiles(type) {
  if (type === 'pages') {
    // return require
    //   .context('../pages/', false, /^.*\.js$/)
    //   .keys().map(i => i.slice(2).replace(/.js$/, ''));
  } else if (type === 'posts') {
    return require
      .context('../posts/', false, /^.*\.md$/)
      .keys().map(i => i.slice(2).replace(/.md$/, ''));
  } else {
    throw new Error('Cant load files of this type!');
  }
}
