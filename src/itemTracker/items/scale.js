import React from 'react';
import noScale from '../../assets/main quest/No_Scale.png'
import scale from '../../assets/main quest/Water_Dragon_Scale.png'

export default class Scale extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const current = this.props.current
        let parent = this.props.parent

        switch (current) {
            case 0:
                return <div id={"Scale-item"}>
                    <img src={noScale} onClick={this.handleClick} alt={"No Scale"} width={parent.width/5.2}/>
                </div>
            case 1:
                return <div id={"Scale-item"}>
                    <img src={scale} onClick={this.handleClick} alt={"Scale"} width={parent.width/5.2}/>
                </div>
            default:
                return null

        }
    }

    handleClick () {
        this.props.onChange("scale")
    }
}
