const gulp = require('gulp')
const path = require('path')
const gzip = require('gulp-gzip')
const s3 = require('gulp-s3')
const execSync = require('child_process').execSync
const build = require('./build.js')

const gitBranchName = process.env.TRAVIS_BRANCH || execSync(`git rev-parse --abbrev-ref HEAD`).toString('utf8').replace('\n', '')
const gitCommitSha1 = execSync(`git rev-parse HEAD`).toString('utf8').replace('\n', '')
const isMaster = gitBranchName === 'master'

// configs

// TODO: increase cdn max age to 1 day once content becomes more stable (See issue #16)
// !! branches deployments should always be max-age 0
const cdnMaxAge = !isMaster ? 0 : 60 * 5 // = 5 minutes
const AWS = {
  bucket: '3d.io',
  dir:    isMaster ? '' : path.join('branch', gitBranchName),
  region: 'eu-west-1',
  key:    process.env.AWS_ACCESS_KEY_ID,
  secret: process.env.AWS_SECRET_ACCESS_KEY
}
const src = {
  uploadUncompressed: [
    'build/**/**',
    '!build/**/*.html',
    '!build/**/*.css',
    '!build/**/*.js',
    '!build/**/*.svg'
  ],
  uploadCompressed: [
    'build/**/*.html',
    'build/**/*.css',
    'build/**/*.js',
    'build/**/*.svg'
  ]
}

// tasks

const release = gulp.series(
  build.build,
  uploadCompressed,
  uploadUncompressed
)

function uploadCompressed () {
  return gulp.src(src.uploadCompressed)
    .pipe(gzip({
      append: false, // do not append .gz extension
      threshold: false, // no file size treshold because all files will have gzip headers
      gzipOptions: { level: 9 }
    }))
    .pipe(s3(AWS, {
      headers: {
        'Content-Encoding': 'gzip',
        'Cache-Control': 'max-age=' + cdnMaxAge
      },
      uploadPath: AWS.dir,
      failOnError: true
    }))
}

function uploadUncompressed () {
  return gulp.src(src.uploadUncompressed)
    .pipe(s3(AWS, {
      headers: {
        'Cache-Control': 'max-age=' + cdnMaxAge
      },
      uploadPath: AWS.dir,
      failOnError: true
    }))
}

// export

module.exports = release