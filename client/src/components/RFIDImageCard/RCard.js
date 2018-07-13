import React, { Component } from "react";
import "./RCard.css";
import RFID2 from "../RFIDInfo/RFID2.json";



class RCard extends Component {
    state = {
        potato: "./assets/images/playing_card_back.png",
        potato2: "./assets/images/playing_card_back.png"
      };



    handleFormSubmit = () => {
        
        Object.keys(RFID2).forEach(function(x) {
            console.log(document.getElementById("card1"));
            console.log(document.getElementById("card2"));
            if ((document.getElementById(("card1").trim())) === (document.getElementById(("card2").trim()))){
                console.log("error");
            }else{
                console.log("this:", this);
                console.log("RFID2:", RFID2);
                RCard.bind(this);
                console.log("new this:", this);
            }          
            console.log(x, RFID2[x].image);
        });
        this.setState({
            potato: "Whoa",
            potato2: "Yeah"
        });
    }

    /*onChange() {
        console.log(this.state);
    }*/

    render() {
        return (
            <div className="card rc-card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={this.state.potato} alt="" />
                <img className="card-img-top" src={this.state.potato2} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Your Cards</h5>
                    <input className="form-control" id="card1" type="text" placeholder="input-1" />
                    <input className="form-control" id="card2" type="text" placeholder="input-2" />
                </div>
                <a className="btn btn-primary" onClick={this.handleFormSubmit}>Verify Cards</a>
            </div>
            

        );
    }
}
export default RCard;