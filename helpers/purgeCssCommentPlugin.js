var postcss = require('postcss');

module.exports = postcss.plugin('purgeCommentPlugin', function myplugin(opts) {
  opts = Object.assign({ action: 'add' }, opts);

  return function (root, result) {
    if (opts.action === 'add') {
      if (!root.source.input.file.endsWith('tailwind.css')) {
        root.prepend({ text: '! purgecss start ignore' })
        root.append({ text: '! purgecss end ignore' })
      }

      return
    }
    if (opts.action === 'remove') {
      root.walkComments(comment => {
        console.log(`purgeCommentPlugin: removed "${comment.text}"`)
        return comment.remove()
      })

      return
    }
  };
});
