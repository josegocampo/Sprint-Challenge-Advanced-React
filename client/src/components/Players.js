import axios from 'axios';
import  React, { Component } from 'react';
// import styled from "styled-components";




// const CardHolder = styled.div`
// margin: 0 auto;
// width: 1100px;
// display: flex;
// flex-direction: row;
// flex-wrap: wrap;
// justify-content: space-between;


// `

// const Card = styled.div`
// width: 250px;
// height: 150px;
// border: 2px solid red;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// align-items: center;
// align-text: center;
// margin-bottom: 20px;
// margin-top: 10px;
// background: white;
// `


// const Name = styled.div`
// font-size: 25px;
// font-weight: 600;
// color: pink;

// `
// const Searches = styled.div`
// font-size: 20px;
// font-weight: 600;
// color: limegreen;

// `

// const Country = styled.div`
// font-size: 15px;
// font-weight: 600;
// color: dodgerblue;

// `

class Players extends Component {
    constructor () {
      super()
      this.state = {
          players: []
      }
    }
    componentDidMount() {
        this.fetchData();   
    }
    fetchData = () => {
        axios.get(`http://localhost:5000/api/players`)
        .then(result => { 
            console.log(result.data);
            this.setState({
                players: result.data });
        })
        .catch(error =>{
            console.log('error:', error)
        })
    }
 
    render () {
        return  (
         <div>
               <div>

                   {(this.state.players.map(each => {
                       return <div><div>Number {each.id} {each.name} </div>
                                <div>{each.searches} searches</div>
                                <div>{each.country}</div>
                                
                          </div>
                   }))}
             
               </div>
         </div>
        )
    }
    }
    
    export default Players;


    