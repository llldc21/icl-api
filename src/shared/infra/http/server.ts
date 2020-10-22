import { logger } from '../logger';
import app from './app';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  logger.info(`Server ready at port ${port}`);
});
