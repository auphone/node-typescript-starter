import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as fromModels from '@app/models';

const app = express();
app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/env', (req, res) => {
  res.send(fromModels.getEnv);
});

export default app;
