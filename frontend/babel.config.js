module.exports = {
  "presets": [
    [
      "babel/preset-react",
      {
        "preset-env": {},
        "transform-runtime": {},
        "styled-jsx": {},
        "class-properties": {}
      }
    ]
  ],
  "plugins": [["styled-components", { "ssr": true }]]
}