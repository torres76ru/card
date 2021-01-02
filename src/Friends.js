import React, { Component } from 'react'
import cardData from './data.json'

import './Card.css'

var card = cardData.userData;



class Name extends Component{
	render(){
		return (
				<div>
					{this.props.name}
				</div>
			)
	}
}

class NamesContainer extends Component{
	render() {
		return (
				<div>
					{this.props.names.map(friend => 
						<div className="friends__friend friend" style={{color: friend.color}} >
							<div className="friend__avatar"><img src={card.smallPicture} alt=""/></div>
							<div className="friend__name"><Name name = {friend.name}/></div>
						</div>
						)}
				</div>
			)
	}
}


class Friends extends Component{
	state = {
		names: [
				'jhon',
				'Abigail',
				'Woondix',
				'Dante',
				'Nero',
				'Boruto',
				'Sakura'
			],
		searchTerm: ''
	}
	editSearchTerm = (e) => {
		this.setState({searchTerm: e.target.value})
	}
	dynamicSearch = () => {
		// console.log(this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase())));
		// console.log(card.friends.map((item=>item)).filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())));
		//return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
		return card.friends.map((item=>item)).filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
	}
	render(){
		return(
			<div className="friends">
				<div className="friends__label">
					Friends list
				</div>
				
				<div className="friends__content">
					<input className="friends__filter" type="text" value= { this.state.searchTerm} onChange = {this.editSearchTerm} placeholder ="Filter"/>
					<div className="friends__body"><NamesContainer names = {this.dynamicSearch()}/></div>
					
				</div>
			</div>
		)
	}
}
export default Friends;