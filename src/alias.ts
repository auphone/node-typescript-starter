import * as alias from 'module-alias';
import * as path from 'path';

export const init = () => {
  alias.addAliases({
    '@app': __dirname,
    '@env': path.resolve(__dirname, './environments')
  });
};
