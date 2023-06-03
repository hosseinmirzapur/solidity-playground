// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

import "./SimpleStorage.sol";

contract ExtraStorage is SimpleStorage {
    // In order to override an inherited function:
    // 1. Add the "inherit" keyword here
    // 2. Add the "virtual" keyword on the parent contract's function

    function store(uint256 _favoriteNumber) public override {
        favoriteNumber = _favoriteNumber + 5;
    }
}
