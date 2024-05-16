import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = this.getState(props.timeZone);
    }

    getState(timeZone) {
        const date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        const newDate = new Date(utc + (3600000 * timeZone));
      
        const hours = (newDate.getHours()).toString().padStart(2, '0');
        const minutes = newDate.getMinutes().toString().padStart(2, '0');
        const seconds = newDate.getSeconds().toString().padStart(2, '0');

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ hours: Number(this.state.minutes) == 59? Number(this.state.hours) + 1 : 
                                   Number(this.state.hours) < 24 ? Number(this.state.hours): 0, 
                            minutes: Number(this.state.seconds) == 59? Number(this.state.minutes) + 1 : 
                                     Number(this.state.minutes) < 59 ? Number(this.state.minutes): 0, 
                            seconds: Number(this.state.seconds) < 59 ? Number(this.state.seconds) + 1 : 0 
                        });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className='clock-container'>
                <h3 className='capital'>{this.props.capital}</h3>
                <div className='clock-time'>
                    <div className='time'>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
                </div>
                <a href="#" className='clock-delete' onClick={() => this.props.onDeleteClick(this.props.id)}>✘</a>
            </div>
        );
    }
}
