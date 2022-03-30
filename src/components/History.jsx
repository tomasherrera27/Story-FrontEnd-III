import Data from "../data.json";
import React, { Component } from "react";
import Choices from "./Choices";
import Swal from 'sweetalert2'

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            id: "",
            story: [],
            choice: {
                a: "",
                b: "",
            },
            letter: "",
            listChoices: [],
        };
    }
    componentDidMount() {
        this.setState({
            count: this.state.count,
            id: `${Data[0].id}`,
            story: `${Data[0].historia}`,
            choice: {
                a: `${Data[0].opciones.a}`,
                b: `${Data[0].opciones.b}`,
            }
        });
    }
    opcion = (e) => {
        if (e.target.id === "a" && this.state.count <= 7) {
            this.setState({
                story: `${Data[this.state.count].historia}`,
                choice: {
                    a: `${Data[this.state.count].opciones.a}`,
                    b: `${Data[this.state.count].opciones.b}`
                },
                count: this.state.count + 2,
                letter: e.target.id,
                listChoices: [...this.state.listChoices, this.state.letter]
            })
        } else if (e.target.id === "b" && this.state.count <= 7) {
            this.setState({
                story: `${Data[this.state.count + 1].historia}`,
                choice: {
                    a: `${Data[this.state.count + 1].opciones.a}`,
                    b: `${Data[this.state.count + 1].opciones.b}`
                },
                count: this.state.count + 2,
                letter: e.target.id,
                listChoices: [...this.state.listChoices, this.state.letter]
            })
        } else {
            Swal.fire({
                title: 'Felicitaciones!',
                text: 'Finalizaste la historia.',
                imageUrl: 'https://media.giphy.com/media/gd0Dqg6rYhttBVCZqd/giphy.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                    }) 
                    setTimeout(function(){
                        window.location.reload();
                    }, 3000);
        }
       
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{this.state.story}</h1>
                <div className="opciones">
                    <div className="opcion">
                        <button className="botones" onClick={this.opcion} id="a">A</button>
                        <h2 >{this.state.choice.a}</h2>
                    </div>
                    <div className="opcion">
                        <button className="botones" onClick={this.opcion} id="b" >B</button>
                        <h2 >{this.state.choice.b}</h2>
                    </div>
                </div>
                <Choices choice={this.state.letter} listChoices={this.state.listChoices} />
            </div>
        )
    }
}
export default History;