import React, { Component } from 'react';

import Zombie from './Zombie';

const Humbug = {
    name: 'Humbug',
    level: 5,
    hp: 20,
    type: 'cpu',
    moves: {
        move_1: {
            name: "Tackle",
            power: 4
        },
        move_2: {
            name: "Growl",
            power: 0
        }
    }
}

class GameMgr extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getAttack = (zombie, move) => {
        let newState = this.state;
        newState = {
            attack: {
                zombie: zombie,
                move: move.name
            }
        }
        this.setState(newState);
    }

    showMessage = () => {
        if(this.state.attack) {
            return(
                <div>
                    <p>{`${this.state.attack.zombie} uses ${this.state.attack.move}!`}</p>
                </div>
            )
        }
        return false;
    }

    render() {
        return(
            <div>
                <Zombie 
                    type='player' 
                    name={"Geek"} 
                    level={6} 
                    hp={11} 
                    moves={{move_1: {name: "Scratch", power: 5},
                            move_2: {name: "Leer", power: 0}}}
                    sendAttack={this.getAttack.bind(this)}>
                </Zombie>
                <Zombie {...Humbug} sendAttack={this.getAttack.bind(this)}></Zombie>
                { this.showMessage() }
            </div>
        )
    }
}

export default GameMgr;