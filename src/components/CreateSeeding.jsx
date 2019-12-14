import React from 'react';
import firebase from '../utils/firestore';
import { ethers } from 'ethers';
import abi from '../utils/abi';

class CreateSeeding extends React.Component {
    constructor() {
        super();

        this.state = {
            Name:"",
            Goal:"",
            Id:"",
            Name1:"",
        };

        this.handlechange=this.handlechange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleSubmit1=this.handleSubmit1.bind(this);
    }

    handlechange = (e) => {
        this.setState ({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let ethereum = window.ethereum;
        let addr = await ethereum.enable();

        let  provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        const signer = provider.getSigner();
        let address="0x3e188d64c2c82a89da9f978a2b758e6ad0aaf8b1";
        let contract = new ethers.Contract(address, abi, signer);

        let rewards = "0xfa9bdcb99b05ff712bf0ac4e6092730772a62710";
        let tx1 = await contract.newContract(this.state.Goal, rewards);

        let Id = await contract.getid();
        Id = parseInt(Id._hex);

        const db = firebase.firestore();
        const investorref = db.collection("contract").add({
            Id: Id,
            Name: this.state.Name,
        });

        this.setState({
            Name: "",
            Goal: ""
        });
    };

    handleSubmit1 = async (e) => {
        e.preventDefault()
        
        let ethereum = window.ethereum;
        let addr = await ethereum.enable();
        
        const db = firebase.firestore();
        const contractRef1 = await db.collection("contract").where('Name' , '==' ,this.state.Name1).get()
        let contractid
        contractRef1.docs.forEach(async (El) => {
            console.log("the id is", El.data().Id)
            // console.log("the owner address is", Ele.data().owner)
            contractid = El.data().Id
        });

        console.log("The token id is", contractid)

        this.setState({
            Id:contractid,
            Name1:"",
        });
    };

    render() {
        return(
            <div className="mt-4">
                <h4 className="text-3xl font-bold">Deploy your seedfunding contract</h4>
                
                <form 
                    className="flex p-4 justify-between align-items-center"
                    onSubmit={this.handleSubmit}
                >
                    <div className="pr-2 flex-col">
                        <div className="text-xl">
                            <label htmlFor="Name" className="pr-2">Enter the name for the contract</label>
                            <input 
                                type="text"
                                name="Name"
                                label="Name"
                                onChange={this.handlechange} value={this.state.Name}
                                placeholder="Scalable Rewards Co."
                                className="px-2 border-b-2 border-gray-800 rounded-lg"
                            />
                        </div>

                        <div className="text-xl">
                            <label htmlFor="Goal" className="pr-2">Set your goal for this funding round</label>
                            <input
                                type="text"
                                name="Goal"
                                label="Goal"
                                onChange={this.handlechange}
                                value={this.state.Goal}
                                placeholder="1000 (in ETH)"
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


                <h4 className="text-3xl font-bold">Find your contract ID</h4>

                <form
                    className="flex p-4 justify-between align-items-center"
                    onSubmit={this.handleSubmit1}
                >
                    <div className="pr-2 flex-col">
                        <div className="text-xl">
                            <label htmlFor="Name1" className="pr-2">Enter the name for the contract</label>
                            <input
                                type="text"
                                name="Name1"
                                onChange={this.handlechange}
                                value={this.state.Name1}
                                placeholder="Scalable Rewards Co."
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

                <div className="my-2">
                    {this.state.Id !== ""
                        ? <h3 className="h-full w-full p-4 border border-green-900 bg-green-200 text-green-900 rounded-lg border-l-8">The ID for your contract is {this.state.Id}</h3>
                        : <h3 className="h-full w-full p-4 border border-blue-900 bg-blue-200 text-blue-900 rounded-lg border-l-8">Please make a query to verify your Contract ID.</h3>
                    }
                </div>
            </div>
        );
    };
};

export default CreateSeeding;
