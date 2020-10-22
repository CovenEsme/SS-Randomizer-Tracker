import React from 'react';
import songBlock from '../assets/Song_Block.png'

import Courage from "./items/courage";
import Power from "./items/power";
import Wisdom from "./items/wisdom";
import Ballad from "./items/ballad";
import Soth from "./items/soth";
import Harp from "./items/harp";

import Sailcloth from "./items/sailcloth";
import Scale from "./items/scale";
import Earrings from "./items/earrings";
import Mitts from "./items/mitts";

import Stone from "./items/stone";
import EmeraldTablet from "./items/emeraldTablet"
import RubyTablet from "./items/rubyTablet"
import AmberTablet from "./items/amberTablet"

export default class SwordBlock extends React.Component {
    
    MAX_GUSTBELLOWS;
    MAX_SONG;
    MAX_HARP;
    MAX_NON_B;
    MAX_MITTS;


    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)

        this.MAX_GUSTBELLOWS = 2;
        this.MAX_SONG = 2;
        this.MAX_SOTH = 4;
        this.MAX_HARP = 2;
        this.MAX_NON_B = 2;
        this.MAX_MITTS = 3;

        this.state = { items: {
            gustBellows: 0,
            mitts: 0,
            scale: 0,
            earrings: 0,
            harp: 0,
            courage: 0,
            wisdom: 0,
            power: 0,
            ballad: 0,
            soth: 0,
            sailcloth: 0,
            stone: 0,
            emeraldTablet: 0,
            rubyTablet: 0,
            amberTablet: 0,
        },
    };
    }
    

    
    render() {
        let wid = this.props.style.width

        const sailclothStyle = {
            position: 'relative',
            bottom: (wid/1.97 + 600/wid),
            left: wid/13
        }

        const earringsStyle = {
            position: 'relative',
            bottom: (wid/4 + 600/wid),
            left: wid/1.75
        }        
        
        const scaleStyle = {
            position: 'relative',
            bottom: (wid/3.8 + 600/wid),
            left: wid/4
        }

        const mittsStyle = {
            position: 'relative',
            bottom: (wid/1.95 + 600/wid),
            left: wid/1.325
        }

        const courageStyle = {
            position: 'relative',
            bottom: (wid/1.315 + 600/wid),
            left: wid/1.54
        }

        const powerStyle = {
            position: 'relative',
            bottom: (wid/1.78 + 600/wid),
            left: wid/1.775
        }

        const wisdomStyle = {
            position: 'relative',
            bottom: (wid/1.78 + 600/wid),
            left: wid/3.375
        }        

        const balladStyle = {
            position: 'relative',
            bottom: (wid/1.315 + 600/wid),
            left: wid/4.7
        }  
        const sothStyle = {
            position: 'relative',
            bottom: (wid/1.07 + 600/wid),
            left: wid/3.15
        }  

        const harpStyle = {
            position: 'relative',
            bottom: (wid/1.315 + 600/wid),
            left: wid/2.5
        }  

        const stoneStyle = {
            position: 'relative',
            bottom: (wid/0.809 + 600/wid),
            left: wid/1.8
        } 

        const emeraldTabletStyle = {
            position: 'relative',
            bottom: (wid/0.855 + 600/wid),
            left: wid/4.3
        }  

        const rubyTabletStyle = {
            position: 'relative',
            bottom: (wid/0.7855 + 600/wid),
            left: wid/6
        }  

        const amberTabletStyle = {
            position: 'relative',
            bottom: (wid/0.7855 + 600/wid),
            left: wid/13.9
        }  

        return  <div id={"songBlock"}>
                    <img src={songBlock} alt={""} width={wid}/>

                    <div id={"sailcloth"} style={sailclothStyle}>
                        <Sailcloth current={this.state.items.sailcloth} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"earrings"} style={earringsStyle}>
                        <Earrings current={this.state.items.earrings} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>                    
                    <div id={"scale"} style={scaleStyle}>
                        <Scale current={this.state.items.scale} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>                    
                    <div id={"mitts"} style={mittsStyle}>
                        <Mitts current={this.state.items.mitts} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>



                    <div id={"courage"} style={courageStyle}>
                        <Courage current={this.state.items.courage} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"power"} style={powerStyle}>
                        <Power current={this.state.items.power} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"wisdom"} style={wisdomStyle}>
                        <Wisdom current={this.state.items.wisdom} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"ballad"} style={balladStyle}>
                        <Ballad current={this.state.items.ballad} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"soth"} style={sothStyle}>
                        <Soth current={this.state.items.soth} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"harp"} style={harpStyle}>
                        <Harp current={this.state.items.harp} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>


                    <div id={"stone"} style={stoneStyle}>
                        <Stone current={this.state.items.stone} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>                    
                    <div id={"emeraldTablet"} style={emeraldTabletStyle}>
                        <EmeraldTablet current={this.state.items.emeraldTablet} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"rubyTablet"} style={rubyTabletStyle}>
                        <RubyTablet current={this.state.items.rubyTablet} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>
                    <div id={"rubyTablet"} style={amberTabletStyle}>
                        <AmberTablet current={this.state.items.amberTablet} parent={this.props.style} onChange={this.handleUpdate}/>
                    </div>

 
                </div>

    }

    handleClick () {

    }

    handleUpdate (item) {//update handler for each item, blame cj for not commenting
        switch (item) {
            case "courage":
                this.setState((state, props) => ({
                    items: this.setItemState("courage", state.items.courage < this.MAX_SONG ? state.items.courage++ : state.items.courage = 0)
                }));
                return;
            case "power":
                this.setState((state, props) => ({
                    items: this.setItemState("power", state.items.power < this.MAX_SONG ? state.items.power++ : state.items.power = 0)
                }));
                return;
            case "wisdom":
                this.setState((state, props) => ({
                    items: this.setItemState("wisdom", state.items.wisdom < this.MAX_SONG ? state.items.wisdom++ : state.items.wisdom = 0)
                }));
                return;
            case "ballad":
                this.setState((state, props) => ({
                    items: this.setItemState("ballad", state.items.ballad < this.MAX_SONG ? state.items.ballad++ : state.items.ballad = 0)
                }));
                return;
            case "soth":
            this.setState((state, props) => ({
                items: this.setItemState("soth", state.items.soth < this.MAX_SOTH ? state.items.soth++ : state.items.soth = 0)
            }));
                return;
            case "harp":
                this.setState((state, props) => ({
                    items: this.setItemState("harp", state.items.harp < this.MAX_HARP ? state.items.harp++ : state.items.harp = 0)
                }));
                return;
            
            // Non B Items
            case "sailcloth":
                this.setState((state, props) => ({
                    items: this.setItemState("sailcloth", state.items.sailcloth < this.MAX_NON_B ? state.items.sailcloth++ : state.items.sailcloth = 0)
                }));
                return;
            case "scale":
                this.setState((state, props) => ({
                    items: this.setItemState("scale", state.items.scale < this.MAX_NON_B ? state.items.scale++ : state.items.scale = 0)
                }));
                return;
            case "earrings":
                this.setState((state, props) => ({
                    items: this.setItemState("earrings", state.items.earrings < this.MAX_NON_B ? state.items.earrings++ : state.items.earrings = 0)
                }));
                return;
            case "mitts":
                this.setState((state, props) => ({
                    items: this.setItemState("mitts", state.items.mitts < this.MAX_MITTS ? state.items.mitts++ : state.items.mitts = 0)
                }));
                return;

            // Other
            case "stone":
                this.setState((state, props) => ({
                    items: this.setItemState("stone", state.items.stone < this.MAX_NON_B ? state.items.stone++ : state.items.stone = 0)
                }));
                return;            
            case "emeraldTablet":
                this.setState((state, props) => ({
                    items: this.setItemState("emeraldTablet", state.items.emeraldTablet < this.MAX_NON_B ? state.items.emeraldTablet++ : state.items.emeraldTablet = 0)
                }));
                return;
            case "rubyTablet":
                this.setState((state, props) => ({
                    items: this.setItemState("rubyTablet", state.items.rubyTablet < this.MAX_NON_B ? state.items.rubyTablet++ : state.items.rubyTablet = 0)
                }));
                return;
            case "amberTablet":
                this.setState((state, props) => ({
                    items: this.setItemState("amberTablet", state.items.amberTablet < this.MAX_NON_B ? state.items.amberTablet++ : state.items.amberTablet = 0)
                }));
                return;

            default:
                return;
        }
    }

    setItemState(item, state) {
        const newItems = Object.assign({}, this.state.items);
        newItems[item] = state;
        return newItems;
    }
}
