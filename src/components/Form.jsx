import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.capitalRef = React.createRef()
        this.state = {
            capital: '',
            timeZone: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.capitalRef.current.focus()
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            capital: '',
            timeZone: ''
        });
        this.capitalRef.current.focus()
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-control'>
                    <label className='form-label' htmlFor="capital">Название</label>
                    <input className="form-input" id='capital' name='capital' type="text" value={this.state.capital} onChange={this.handleInputChange} ref={this.capitalRef} />
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor="timeZone">Временная зона</label>
                    <input className="form-input" id='timeZone' name='timeZone' type="text" value={this.state.timeZone} onChange={this.handleInputChange} />
                </div>
                <button className='form-button' type="submit">Добавить</button>
            </form>
        );
    }
}