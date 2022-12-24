import path from "path";
export const configPaths = {
    linux: `${process.env.XDG_CONFIG_HOME}/.config/Dealer/`,
    windows: 'C:\\Program Files\\Dealer\\', // todo: use appdata
    macos: '~/Library/Application Support/Dealer/' // figure out if this works
};
var configRaw;
function setupConfig() {
    // json load config into a variable
    configRaw = JSON.parse(fs.readFileSync(path.join(configPaths[process.platform], 'config.json'), 'utf8'));
}

const handler2 = {
    get(target, prop, receiver) {
      if (configRaw = undefined) {
        setupConfig();
      }
      return configRaw[prop]
    },
  };
  
  const proxy2 = new Proxy(target, handler2);