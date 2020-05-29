import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getDetailsHandler } from "../../actions";
import 'bulma/css/bulma.css'
import './getProfile.css'
 
class GetProfile extends PureComponent {
    constructor() {
        super();

        this.state = {
            srcc: []
        }
    }

    componentDidMount() {
        this.props.getDetailsHandler();
    }

    display = () => {
        const { personData } = this.props;
        const { srcc } = this.state;
        if(personData) {
            let x = [];
            personData[0].images.forEach(file => {
                let binary = '';
                let buffer = file.data;
                let bytes = new Uint8Array(buffer);
                let len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                x.push(btoa(binary));
                this.setState({
                    srcc: x
                })
            });
        }
    }

    updateCanvas = () => {
        const { srcc } = this.state;
        let x = 0;
        for(let i=0; i < srcc.length; i++) {
            const ctx = this.refs.canvas.getContext('2d');
            let image = new Image();
            image.src = `data:image/jpg;base64,${srcc[i]}`;
            image.onload = function(){
                ctx.drawImage(image, x, 0, 200, 300);
                x += 250;
            }
        }
    }

    render() {
        const { personData} = this.props;
        console.log(personData);
        return (
            <div className="mainContainer box">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <tbody>
                        <tr>
                            <td>{ personData ? Object.keys(personData[0]).map((item, i) => {
                                if(item === 'images') {
                                    return null;
                                } else {
                                    return <div key={i}>{item}</div>
                                }
                            }) : null }</td>
                            <td>{ personData ? Object.values(personData[0]).map((item, i) => {
                                if(typeof(item) === 'object') {
                                    return null;
                                } else {
                                    return <div key={i}>{item}</div>
                                }
                            }) : null }</td>
                        </tr>
                    </tbody>
                </table>
                { personData ? <button className="button" ref="btn" onClick={this.display}>Display Images</button> : null }
                { personData ? <button className="button" ref="btn" onClick={this.display}>Edit Profile Details</button> : null }
                { this.updateCanvas() }
                <canvas ref="canvas" id="canvas" width="750" height="300"></canvas>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        personData: state.personData
    };
};
  
const mapDispachToProps = dispatch => {
    return bindActionCreators({
        getDetailsHandler
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispachToProps)(GetProfile));