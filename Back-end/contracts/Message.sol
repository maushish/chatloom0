// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
/// @title Messaging between two users
/// @author Maushish Yadav
/// @notice This contract consists of functions that are used for messaging between two users.
contract Messaging {
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    mapping(address => Message[]) public inbox;

    event NewMessage(address indexed sender, address indexed receiver, string content, uint256 timestamp);

/// @notice Sends messages with receiver address and actual message content with timestamp
    function sendMessage(address _receiver, string memory _content) public {
        require(_receiver != address(0), "Please Provide Corrrec Address");
        inbox[_receiver].push(Message(msg.sender, _content, block.timestamp));
        emit NewMessage(msg.sender, _receiver, _content, block.timestamp);
    }

/// @notice This gives a count of how many messages have been sent by sender
    function getInboxCount() public view returns (uint) {
        return inbox[msg.sender].length;
    }

    function getMessage(uint _index) public view returns (address, string memory, uint256) {
        require(_index < inbox[msg.sender].length, "Index out of bounds");
        Message memory message = inbox[msg.sender][_index];
        return (message.sender, message.content, message.timestamp);
    }

    ///@notice this formats timestamp of the block and gives a readable time and date of the mesage    
    function fornmatTimestamp(uint256 _timestamp) internal pure returns(string memory) {
        return toTimeString(_timestamp);
    }
}
