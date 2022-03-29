import Data from "../data.json";
import React, { Component } from "react";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            id: "",
            story: [],
            choice: {
                a: "",
                b: ""
            }
        }
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
        if (e.target.id === "a") {
            this.setState({
                story: `${Data[this.state.count ].historia}`,
                choice: {
                    a: `${Data[this.state.count ].opciones.a}`,
                    b: `${Data[this.state.count ].opciones.b}`
                },
                count: this.state.count + 2
            })
        } else if (e.target.id === "b") {
            this.setState({
                story: `${Data[this.state.count + 1].historia}`,
                choice: {
                    a: `${Data[this.state.count + 1].opciones.a}`,
                    b: `${Data[this.state.count + 1].opciones.b}`
                },
                count: this.state.count + 2
            })
        }
        /*
        this.setState({
            count: this.state.count+1
        })*/   
        console.log(this.state.count)
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
            </div>
        )
    }
}
export default History;