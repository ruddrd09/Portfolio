import React, { PureComponent } from 'react';
import ProfileFormField from './ProfileFormField/ProfileFormField';
import { profileForm1, profileForm2 } from './Form';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setDetailsHandler } from "../../actions";
import 'bulma/css/bulma.css'

class Profile extends PureComponent {
    constructor() {
        super();
        this.state = {
            pageNo: 1,
            formData: {},
            errorObj: {},
            errorMsg: false,
            reader: null
        }
    }

    changeHandler = (evt) => {
        const { name, value } = evt.target;
        const { pageNo, errorObj } = this.state;
        let elem = null;
        if(pageNo === 1) {
            elem = profileForm1.filter(item => item.key === name);
        } else if(pageNo === 2) {
            elem = profileForm2.filter(item => item.key === name);
        }
        const x = new RegExp(elem[0].validation.value);
        if(x.test(value)) {
            this.setState({
                errorObj: { ...errorObj, [name]: undefined}
            })
        } else {
            this.setState({
                errorObj: { ...errorObj, [name]: elem[0].validation.message}
            })
        }
    }

    blurHandler = (evt) => {
        const { name, value} = evt.target;
        const { formData, pageNo } = this.state;
        let elem = null;
        if(pageNo === 1) {
            elem = profileForm1.filter(item => item.key === name);
        } else if(pageNo === 2) {
            elem = profileForm2.filter(item => item.key === name);
        }
        const x = new RegExp(elem[0].validation.value);
        if(x.test(value)) {
            this.setState({
                formData: { ...formData, [name]: value } 
            })
        } else {
            this.setState({
                formData: { ...formData, [name]: undefined } 
            })
        }
    }

    forwardForm = (evt) => {
        evt.preventDefault();
        const { formData, errorObj, pageNo } = this.state;
        if((pageNo === 1 && ((Object.keys(errorObj).length === 0 && Object.keys(formData).length === 0) || Object.keys(formData).length < 4)) 
        || (pageNo === 2 && ((Object.keys(errorObj).length === 0 && Object.keys(formData).length === 4) || Object.keys(formData).length < 8))) {
            this.setState({
                errorMsg: true
            })
        } else {
            this.setState({
                errorMsg: false,
                pageNo: this.state.pageNo+1
            })
        }
    }

    backwardForm = (evt) => {
        evt.preventDefault();
        this.setState({
            pageNo: this.state.pageNo-1
        })
    }

    submitHandler = (evt) => {
        const { formData } = this.state;
        evt.preventDefault();
        this.props.setDetailsHandler(formData);
        this.props.history.push('/getDetails');
    }

    fileHandler = (evt) => {
        let x = [];
        const { formData } = this.state;
        const { name } = evt.target;
        [...evt.target.files].forEach(file => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let string = reader.result;
                x.push(new Buffer(string.split(",")[1],"base64"));
            };
            reader.onloadend = () => {
                this.setState({
                    formData: { ...formData, [name]: x}
                });
            }
        });
    }

    render() {
        const { pageNo, formData, errorObj, errorMsg, reader} = this.state;
        if(reader) {
            this.blurEvent();
        }
        console.log(formData);
        return (
            <div className="box">
                <form onSubmit={this.submitHandler}>
                    {pageNo === 1 ? profileForm1.map(item => {
                        return (
                            <div key={item.key}>
                                <ProfileFormField 
                                item={item}
                                value={formData[item.key] ? formData[item.key] : item.value}
                                blurHandler={this.blurHandler}
                                errorObj={errorObj}
                                changeHandler={this.changeHandler}
                                />
                            </div>
                        )
                    }) : null }
                    { pageNo === 2 ? profileForm2.map(item => {
                        return (
                            <div key={item.key}>
                                <ProfileFormField 
                                item={item}
                                value={formData[item.key] ? formData[item.key] : item.value}
                                blurHandler={this.blurHandler}
                                errorObj={errorObj}
                                changeHandler={this.changeHandler}
                                />
                            </div>
                        )
                    }) : null}
                    { pageNo === 3 ?
                        <div>
                            <div className="field">
                                <div className="file is-centered is-boxed is-success has-name">
                                    <label className="file-label">
                                    <input className="file-input" type="file" onChange={this.fileHandler} name="imgs" multiple/>
                                    <span className="file-cta">
                                        <span className="file-label">
                                        Centered file…
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        
                                    </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    : null}
                    { errorMsg ? <div className="box">Please fill out the required fields</div> : null}
                    { pageNo === 1 || pageNo === 2 ? <button className="button" onClick={this.forwardForm}>Next</button> : null }
                    { pageNo === 2 || pageNo === 3 ? <button className="button" onClick={this.backwardForm}>Previous</button> : null }
                    { pageNo === 3 ? <button className="button" type="submit">Submit</button> : null}
                </form>
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
        setDetailsHandler
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Profile));