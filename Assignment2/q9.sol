// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionLedger {
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    Transaction[] public transactions;

    function recordTransaction(address _receiver, uint256 _amount) external {
        transactions.push(Transaction(msg.sender, _receiver, _amount, block.timestamp));
    }

    function getTransactionCount() external view returns (uint256) {
        return transactions.length;
    }

    function getTransaction(uint256 _index) external view returns (address, address, uint256, uint256) {
        require(_index < transactions.length, "Index out of bounds");
        Transaction storage txn = transactions[_index];
        return (txn.sender, txn.receiver, txn.amount, txn.timestamp);
    }
}
