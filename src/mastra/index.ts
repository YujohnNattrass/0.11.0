
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  storage: new LibSQLStore({
    url:
      process.env.ENVIRONMENT === "production" ?
        "file:./mastra.db"
      : "file:../../mastra.db",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'debug',
  }),
});
