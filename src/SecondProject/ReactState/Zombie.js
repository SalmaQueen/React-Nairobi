import React, { Component } from 'react';

class Zombie extends Component {

    attack = (move) => {
        this.props.sendAttack(this.props.name, move);
    }

    render() {
        return(
            <div>
                <h1>Zmb: {this.props.name}</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><span>Level: {this.props.level}</span></li>
                    <li><span>hp: {this.props.hp}/{this.props.hp}</span></li>
                </ul>

                <ul style={{listStyle: 'none'}}>
                    <li><button onClick={() => this.attack(this.props.moves.move_1)}>{this.props.moves.move_1.name}</button></li>
                    <li><button onClick={() => this.attack(this.props.moves.move_2)}>{this.props.moves.move_2.name}</button></li>
                    <li><span>-</span></li>
                    <li><span>-</span></li>
                </ul>
            </div>
        )
    }
}

export default Zombie;