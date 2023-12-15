import React, { Component } from 'react';


class Map extends Component {
    render() {
        return (
            <>
            <h2>Lieu de formation du BTS SIO</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.9875083393313!2d-52.30475722689323!3d4.9417202395249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d123ccb0b553311%3A0xe1f00b638b7d477a!2sLyc%C3%A9e%20polyvalent%20Melkior-Garr%C3%A9!5e0!3m2!1sfr!2sfr!4v1701979233662!5m2!1sfr!2sfr"
                    style={{ border: 0, width: 590, height:610 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </>
        );
    }
}

export default Map;
