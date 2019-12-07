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
        let address="0x6abf86c454134bd21fb13b2aa44046b9afdf682f";
        let contract = new ethers.Contract(address, abi, signer);

        let rewards = "0x6463e4534d93a35ad0bb0b03954d73d405ca26b1";
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
            <div className="">
                <h4>SeedFunding Start here</h4>
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  name="Name"  label="Name" onChange={this.handlechange} value={this.state.Name} placeholder="Enter Name"/>
                    <input type="text"  name="Goal" label="Goal" onChange={this.handlechange}  value={this.state.Goal} placeholder="Enter Amount"/>
                    <button type="submit">Submit</button>
                </form>

                <h4>Get your Id</h4>

                <form onSubmit={this.handleSubmit1}>
                    <input type="text" name="Name1" onChange={this.handlechange} value={this.state.Name1} placeholder="ENTER NAME HERE"/>
                    <button type="submit" >Submit</button> 
                </form>

                {this.state.Id !== "" ? <h3 style={{textAlign: 'center'}}>The Id is {this.state.Id}</h3> : ""}

            </div>
        );
    };
};

export default CreateSeeding;
