import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'development') {
  prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  });

  prisma.$on('query', (e) => {
    console.log({
      Query: e.query,
      Params: e.params,
      Duration: e.duration + 'ms',
      Timestamp: e.timestamp,
    });
  });
} else {
  prisma = new PrismaClient();
}

export default prisma;

export { Role, FormStatus };
