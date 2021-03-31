import { applyMiddleware } from 'redux';

import loggerMiddleware from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';

const appMiddlewares = applyMiddleware(loggerMiddleware, asyncMiddleware);

export default appMiddlewares;