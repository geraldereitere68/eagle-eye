/* 
Filename: ComplexCode.js

This code is a complex implementation of a blockchain using JavaScript. It includes classes for creating blocks, transactions, and a blockchain itself. It also includes cryptographic functions for hashing and verifying data, and a mining algorithm for adding new blocks to the chain. This code is purely for demonstration purposes and not intended for production use.
*/

// Class representing a transaction
class Transaction {
  constructor(sender, receiver, amount) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
  }
}

// Class representing a block
class Block {
  constructor(timestamp, transactions, previousHash = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const crypto = require('crypto');
    const data = this.timestamp + JSON.stringify(this.transactions) + this.previousHash + this.nonce;
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash;
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Block mined:', this.hash);
  }
}

// Class representing a blockchain
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block('01/01/2022', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    const rewardTransaction = new Transaction(null, miningRewardAddress, this.miningReward);
    this.pendingTransactions.push(rewardTransaction);

    const block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
    block.mineBlock(this.difficulty);

    console.log('Block successfully mined!');
    this.chain.push(block);

    this.pendingTransactions = [];
  }

  addTransaction(transaction) {
    if (!transaction.sender || !transaction.receiver || !transaction.amount) {
      throw new Error('Invalid transaction - missing details');
    }

    if (!transaction.isValid()) {
      throw new Error('Invalid transaction - integrity compromised');
    }

    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;
    for (const block of this.chain) {
      for (const transaction of block.transactions) {
        if (transaction.sender === address) {
          balance -= transaction.amount;
        }
        if (transaction.receiver === address) {
          balance += transaction.amount;
        }
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

// Usage example
const blockchain = new Blockchain();

const transaction1 = new Transaction('address1', 'address2', 50);
blockchain.addTransaction(transaction1);

const transaction2 = new Transaction('address2', 'address1', 20);
blockchain.addTransaction(transaction2);

console.log('\nStarting the mining process...');
blockchain.minePendingTransactions('miner-address');

console.log('\nBalance of address1:', blockchain.getBalanceOfAddress('address1'));
console.log('Balance of address2:', blockchain.getBalanceOfAddress('address2'));

console.log('\nIs the blockchain valid?', blockchain.isChainValid() ? 'Yes' : 'No');

console.log('\nAttempting to tamper with the chain...');
blockchain.chain[1].transactions[0].amount = 100;

console.log('\nIs the blockchain still valid?', blockchain.isChainValid() ? 'Yes' : 'No');
