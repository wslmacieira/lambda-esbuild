import { createLogger, format, level, transports } from 'winston';
const { combine, printf } = format;

const customLevels = {
  levels: {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3
  },
  colors: {
      error: 'red',
      warn: 'yellow',
      info: 'green',
      debug: 'blue'
  }
};

const customFormat = format((info: any) => {
	const { level, ...rest } = info
	// delete rest.message
	return { _time: formattedTime,logLevel: level.toUpperCase(), ...rest }
})

const formattedTime = new Intl.DateTimeFormat('pt-BR', {
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	year: 'numeric',
	month: 'numeric',
	timeZone: 'America/Sao_Paulo',
}).format(new Date())

// const customFormat = printf(info  => {
// 	return `_time: ${formattedTime}, [logLevel: ${info.level}] : ${info.message}`
// })

export const logger = createLogger({
  level: level,
  levels: customLevels.levels,
  transports: [
      new transports.Console({
          format: combine(
            customFormat(),
            format.json(),
            format.colorize({ all: true }),
          )
      }),
  ],
});
