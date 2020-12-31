import React, { Component } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import Map from './components/Map/Map'

const Wrapper = styled.div`
    background: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`

const Title = styled.h1`
    color: white;
`

class App extends Component {
    state = {
        position: {
            lat: 0,
            lng: 0
        }
    }

    componentDidMount () {
        this.getISSLocation()
    }

    getISSLocation = async () => {
        try {
            const URL = 'http://api.open-notify.org/iss-now.json'
            const res = await axios.get(URL)

            const position = {
                lat: res.data.iss_position.latitude,
                lng: res.data.iss_position.longitude
            }

            this.setState({ position })
        } catch (error) {
            console.log(error)
        }
    }
    render () {
        const { position } = this.state
        return (
            <Wrapper>
                <Content>
                    <Title>International Space Station Location</Title>
                    <Map position={position} />
                </Content>
            </Wrapper>
        )
    }
}

export default App