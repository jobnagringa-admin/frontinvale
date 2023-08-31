const WEBFLOW_TOKEN = process.env.FRONT_IN_VALE_WEBFLOW_API;

module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./devlink",
  siteId: "64efda0f068f608526d6a4c1",
  authToken: WEBFLOW_TOKEN,
  cssModules: true,
};
