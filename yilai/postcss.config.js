const path = require('node:path')
const fs = require('node:fs')

const importPaths = [
  path.join(__dirname, 'themes/demius/assets/css'),
  path.join(__dirname, 'assets/css')
]

module.exports = {
  plugins: [
    require('postcss-import')({
      path: importPaths,
      resolve(id, basedir) {
        const candidates = [basedir, ...importPaths]
          .map(directory => path.resolve(directory, id))

        return candidates.find(file => fs.existsSync(file)) || id
      }
    })
  ]
}
