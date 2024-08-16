// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    event VoteCast(address indexed voter, uint256 candidateId);

    constructor(string[] memory candidateNames) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(candidateNames[i], 0));
        }
    }

    function vote(uint256 candidateId) external {
        require(!hasVoted[msg.sender], "Already voted");
        require(candidateId < candidates.length, "Invalid ID");

        hasVoted[msg.sender] = true;
        candidates[candidateId].voteCount += 1;

        emit VoteCast(msg.sender, candidateId);
    }

    function getVotes(uint256 candidateId) external view returns (uint256) {
        require(candidateId < candidates.length, "Invalid ID");
        return candidates[candidateId].voteCount;
    }

    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }
}
