import { expect } from 'chai';
import * as path from 'path';

// Init Alias
import * as alias from '../alias';
alias.init();

import * as fromServer from './server.model';

describe('GET Environment', () => {
  it('should be equal to dev', () => {
    return expect(fromServer.getEnv()).eq('dev');
  });
});
