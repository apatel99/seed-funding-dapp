import React from 'react';
import { ethers } from 'ethers';
import abi from '../utils/abi';

class Addinvestor extends React.Component {
    constructor() {
        super();
        this.state = {
            Address:"",
            Id:"",
        };

        this.handlechange=this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
    };

    handlechange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        },console.log(this.state))
    };

    handlesubmit = async(e) => {
        e.preventDefault();
        let ethereum = window.ethereum;
        let addr = await ethereum.enable();
        let  provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        const signer = provider.getSigner();
        
        let address = "0x3e188d64c2c82a89da9f978a2b758e6ad0aaf8b1";
        let contract = new ethers.Contract(address, abi, signer);
        let tx1 = await contract.getaddInvestorbyId(this.state.Id,this.state.Address);
    }

    render() {
        return (
            <div className="mt-4">
                <h4 className="text-3xl font-bold">Hey Investor, register here!</h4>

                <form
                    className="flex p-4 justify-between align-items-center"
                    onSubmit={this.handlesubmit}
                >
                    <div className="pr-2 flex-col">
                        <div className="text-xl">
                            <label htmlFor="Address" className="pr-2">Please enter your ETH address</label>
                            <input
                                type="text"
                                name="Address"
                                onChange={this.handlechange}
                                value={this.state.Address}
                                placeholder="ETH Address"
                                className="px-2 border-b-2 border-gray-800 rounded-lg"
                            />
                        </div>

                        <div className="text-xl">
                            <label htmlFor="Id" className="pr-2">Please enter the contract ID to invest in</label>
                            <input
                                type="text"
                                name="Id"
                                label="Id"
                                onChange={this.handlechange}
                                value={this.state.Id}
                                placeholder="Ex 121"
                                className="px-2 border-b-2 border-gray-800 rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="pl-2">
                        <button
                            className="px-8 py-2 bg-blue-800 rounded-full uppercase tracking-wide font-bold text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default Addinvestor;
