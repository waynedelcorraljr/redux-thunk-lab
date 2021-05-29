// write your CatList component here
import React from 'react';
import { Component } from 'react';

class CatList extends Component {
    render() {
        return (
            <div>
                {this.props.catPics.map(catPic => <img src={catPic.url} key={catPic.url} alt='Pretty Kitty'></img>)}
            </div>
        )
    }
}

export default CatList;