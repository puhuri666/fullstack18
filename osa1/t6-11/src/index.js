import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
        }
    }

    klikHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    klikNeut = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    klikHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {

        return (
                <div>
                    <h1>anna palautetta</h1>
                    <button onClick={this.klikHyva}>hyvä</button>
                    <button onClick={this.klikNeut}>neutraali</button>
                    <button onClick={this.klikHuono}>huono</button>
                    <h1>statistiikka</h1>
                    <p>hyvä: {this.state.hyva}</p>
                    <p>neutraali: {this.state.neutraali}</p>
                    <p>huono: {this.state.huono}</p>
                    <p>keskiarvo: {((this.state.hyva + (this.state.huono * -1)) / (this.state.hyva+this.state.neutraali+this.state.huono)).toFixed(1)}</p>
                    <p>positiivisia: {((this.state.hyva / (this.state.hyva+this.state.neutraali+this.state.huono))*100).toFixed(1)} %</p>
                </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)