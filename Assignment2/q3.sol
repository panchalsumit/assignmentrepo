// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PersonalizedGreeting {
    mapping(address => string) private greetings;

    function setGreeting(string calldata _greeting) external {
        greetings[msg.sender] = _greeting;
    }

    function getGreeting() external view returns (string memory) {
        return greetings[msg.sender];
    }
}
