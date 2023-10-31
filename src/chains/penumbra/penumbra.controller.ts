import { PenumbraConfig } from './penumbra.config';

import { ViewProtocolServiceClient } from './generated/penumbra/view/v1alpha1/view_grpc_pb';
import { BalancesRequest, BalancesResponse } from './generated/penumbra/view/v1alpha1/view_pb';

const grpc = require('@grpc/grpc-js');

export class PenumbraController {
  static balances(req: BalancesRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      // Make connection
      const client = new ViewProtocolServiceClient(
        PenumbraConfig.config.network.rpcURL,
        grpc.credentials.createInsecure()
      );

      // Get balances
      const call = client.balances(req);
      const responses: any[] = [];

      call.on('data', (response: any) => {
        const balanceObject = BalancesResponse.toObject(false, response);
        //console.log(balanceObject);
        responses.push(balanceObject);
      });

      call.on('end', () => {
        resolve(responses);
      });

      call.on('error', (error: any) => {
        console.error('Error during streaming:', error);
        reject(error);
      });
    });
  }
}

async function getBalances() {
  const balances = await PenumbraController.balances(new BalancesRequest());

  console.log('Balances: ');
  balances.forEach((balance: any) => console.log(balance));
}

getBalances();

// To run this file locally
// npm install -g ts-node typescript '@types/node'
// ts-node src/chains/penumbra/penumbra.controller.ts
