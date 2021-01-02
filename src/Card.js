import React, { Component } from 'react'
import cardData from './data.json'
import Friends from './Friends.js'
import './Card.css'

var card = cardData.userData;

function isActive(a){
		if(a){
			return <div className="online"><span>Online</span></div>
		}
		return "Offline"
	}
// function getFriends(friends){

// 	friends.forEach(function(item, i) {
// 		return (
				
// 			)
// 	});
// }
class Card extends Component{
	
	render(){
		return(
			<div className="card">
				<div className="side">
					
					<div className="avatar"><img src={card.bigPicture} alt=""/></div>
					<div>{card.name.first}</div>
					<div>{card.name.last}</div>
					<div>Age: {card.age}</div>
					<div className="eyeColor">Eye's color: <div style={{backgroundColor: card.eyeColor}}></div></div>
					<div>Balance: {card.balance}</div>
				</div>
				<div className="card__head">
				<div className="company">{card.company}</div>
					
					<div>{isActive(card.isActive)}</div>

				</div>
				<div className="card__body">
					<div>
					<div>Email: {card.email}</div>
					<div>Phone: {card.phone}</div>
					<div>Address: {card.address}</div>
					<br/>
					<div>About: <br/>{card.about}</div>
					</div>
					<div>Registered: {card.registered}</div>
				</div>
				<div className="card__friends">
					<Friends/>
				</div>
				
				<div className="card__foot">
					<div>
						<div>Latitude: {card.latitude}</div>
						<div>Longitude: {card.longitude}</div>
					</div>
					<div>
						<div>id: {card._id}</div>
						<div>guid: {card.guid}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card