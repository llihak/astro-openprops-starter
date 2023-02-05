const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')
const postcssPresetEnv = require('postcss-preset-env')

const plugins = [postcssPresetEnv({ stage: 0 }), postcssJitProps(OpenProps)]

module.exports = { plugins }
