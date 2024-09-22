import { BankingTrasnsactionAction } from './Types';

export class BankingTrasnsaction {
  amount: number;
  timestamp: number;
  action: BankingTrasnsactionAction | 'UNKNOWN';
  user: string;
  constructor(data: Record<string, any>) {
    this.amount = data?.amount || 0;
    this.timestamp = data?.timestamp || 0;
    this.action = data?.action || 'UNKNONW';
    this.user = data?.initiator_name || 'UNKNOWN';
  }
}

class Banking {
  balance: number;
  transactions: BankingTrasnsaction[];
  constructor(data: Record<string, any>) {
    this.balance = data.balance || 0;
    this.transactions = [];
    (data.transactions || []).forEach((transaction: Record<string, any>) => {
      this.transactions.push(new BankingTrasnsaction(transaction));
    });
  }
}

export default Banking;
