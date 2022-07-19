module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      { useBuiltIns: "entry", jsx: { compositionAPI: true } },
    ],
  ],
};
