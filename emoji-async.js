const emoji = require("./emoji");
const { wait, random } = require("./helpers");

async function getEmoji(request) {
  await wait(1000);
  return emoji[request];
}
