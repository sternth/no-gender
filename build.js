const fs = require('fs-extra')
const os = require('os')
const { join } = require('path')
const archiver = require('archiver')

run().then(() => {
  console.log('done')
  process.exit(0)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

async function run () {
  const assetsFolder = join(process.cwd(), 'assets')
  const srcFolder = join(process.cwd(), 'src')
  const distFolder = join(process.cwd(), 'dist')
  const rnd = Math.random().toString(36).substr(2, 5)
  const tempFolder = join(os.tmpdir(), rnd)

  // clear dist folder
  console.log('clear dist folder ...')
  fs.rmdirSync(distFolder, { recursive: true })
  fs.mkdirSync(distFolder)

  // creating extension for chrome
  copyFiles(['chrome', 'firefox'])
  console.log('archiving web extension ...')
  await archiveFiles('chrome')
  console.log('chrome extension zipped ...')
  fs.rmdirSync(tempFolder, { recursive: true })
  console.log('temporary files removed ...')

  // creating extension for firefox
  copyFiles(['firefox', 'chrome'])
  console.log('archiving web extension ...')
  await archiveFiles('firefox')
  console.log('chrome extension zipped ...')
  fs.rmdirSync(tempFolder, { recursive: true })
  console.log('temporary files removed ...')

  function copyFiles (options) {
    const [ target, other ] = options
    console.log(`coping source files for ${target} ...`)
    console.log(`creating temporary folder ${tempFolder} ...`)
    fs.mkdirSync(tempFolder)
    console.log('copy assets ...')
    fs.copySync(assetsFolder, join(tempFolder, 'assets'))
    console.log('remove logo source file ...')
    fs.removeSync(join(tempFolder, 'assets/logo.xcf'))
    console.log('copy source files ...')
    fs.copySync(srcFolder, tempFolder)
    console.log(`remove unnecessary manifest for ${other} ...`)
    fs.removeSync(join(tempFolder, `manifest.${other}.json`))
    console.log(`rename manifest for ${target} to manifest.json ...`)
    fs.renameSync(join(tempFolder, `manifest.${target}.json`), join(tempFolder, 'manifest.json'))
  }

  function archiveFiles (target) {
    const file = join(distFolder, `no-gender.${target}.zip`)
    const output = fs.createWriteStream(file)
    const archive = archiver('zip')
    return new Promise((resolve, reject) => {
      output.on('close', resolve)
      archive.on('error', reject)
      archive.pipe(output)
      archive.directory(tempFolder, false)
      archive.finalize()
    })
  }
}
