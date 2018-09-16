import React, { Component } from 'react'
class App extends Component {
    componentDidMount = () => {
        console.log("Did mount!")
    }
    render() {
        return (
            <div>
                <h1>Hello, React World!</h1>
            </div>
        )
    }
}

export default App