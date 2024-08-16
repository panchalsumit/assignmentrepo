// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventExample {
    event ActionPerformed(address indexed user, string action, uint256 value);

    function performAction(string calldata _action, uint256 _value) external {
        emit ActionPerformed(msg.sender, _action, _value);
    }
}
