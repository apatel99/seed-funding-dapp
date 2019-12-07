const abi = [
  {
      "constant": false,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          }
      ],
      "name": "getinvestbyId",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          },
          {
              "name": "investor",
              "type": "address"
          }
      ],
      "name": "getaddInvestorbyId",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          }
      ],
      "name": "getgetInvestmentId",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          }
      ],
      "name": "getwithdrawbyId",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_goal",
              "type": "uint256"
          },
          {
              "name": "_rewards",
              "type": "address"
          }
      ],
      "name": "newContract",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "database",
      "outputs": [
          {
              "name": "",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          }
      ],
      "name": "getnum_participantsbyId",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "Seedid",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "getid",
      "outputs": [
          {
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "name": "_id",
              "type": "uint256"
          },
          {
              "name": "investor",
              "type": "address"
          }
      ],
      "name": "getremoveInvestorbyId",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "name": "_database",
              "type": "address"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  }
]

export default abi;
