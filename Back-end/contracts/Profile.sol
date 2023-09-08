// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title User-Profiles contract 
/// @author Maushish
contract user{
    struct profile{       
        string name;
        string Bio;
        string avatarHash;        
    }

    mapping (address=>profile) public userProfiles;

    /// @notice Sets your profile with your name,bio and avatar image
    /// @dev Better variabe names could be used for better understanding
    function setProfile(string memory _name, string memory _Bio, string memory _avatarHash) public {
        userProfiles[msg.sender]=profile(_name,_Bio,_avatarHash);
    }
    function getProfile() public view returns (string memory, string memory, string memory){
        profile memory Profile=userProfiles[msg.sender];
        return (Profile.name, Profile.Bio, Profile.avatarHash);
    }
}