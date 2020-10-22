import React from 'react';
import noStone from '../../assets/main quest/No_Stone.png'
import stone from '../../assets/main quest/Stone_of_Trials.png'

export default class Stone extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const current = this.props.current
        let parent = this.props.parent

        switch (current) {
            case 0:
                return <div id={"Stone-item"}>
                    <img src={noStone} onClick={this.handleClick} alt={"No Stone"} width={parent.width/4.6}/>
                </div>
            case 1:
                return <div id={"Stone-item"}>
                    <img src={stone} onClick={this.handleClick} alt={"Stone"} width={parent.width/4.6}/>
                </div>
            default:
                return null

        }
    }

    handleClick () {
        this.props.onChange("stone")
    }
}
