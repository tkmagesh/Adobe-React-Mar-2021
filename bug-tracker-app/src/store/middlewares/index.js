import { applyMiddleware } from 'redux';

/* import loggerMiddleware from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware';

const appMiddlewares = applyMiddleware(loggerMiddleware, asyncMiddleware, promiseMiddleware);
 */

/* import logger from 'redux-logger';
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware';

const appMiddlewares = applyMiddleware(logger, asyncMiddleware, promiseMiddleware); */

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

const appMiddlewares = applyMiddleware(logger, thunk, promiseMiddleware);

export default appMiddlewares;