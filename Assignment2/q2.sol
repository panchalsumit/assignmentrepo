// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    int private storedNumber;

    function set(int _number) external {
        storedNumber = _number;
    }

    function get() external view returns (int) {
        return storedNumber;
    }
}
