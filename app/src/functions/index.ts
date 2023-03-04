import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import axios from 'axios';
import { logger } from '../services/logger';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  // console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  // console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
  //   params: {
  //     _limit: 10
  //    }
  // })
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello lambda',
      // data
    }),
  };

  logger.info({ _serviceName: 'Lambda hello', response })

  return response
};