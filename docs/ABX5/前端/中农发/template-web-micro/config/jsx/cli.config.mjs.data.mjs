export default function getData({ oldData }) {
  const vueJsxRule = {
    module: {
      rules: [
        "{test: /\.jsx$/,loader: 'babel-loader'}"
      ]
    }
  }

  return {
    ...oldData,
    module: {
      ...(oldData.module || {}),
      rules: (oldData.rules || []).concat(vueJsxRule.module.rules)
    }
  }
}
