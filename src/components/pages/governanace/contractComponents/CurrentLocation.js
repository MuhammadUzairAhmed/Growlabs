import React, {Component} from 'react';
import $ from 'jquery';

class CurrentLocation extends Component
{
    componentDidMount()
    {
        $.getJSON("https://jsonip.com?callback=?", function (data) {
        $.getJSON("https://cors-anywhere.herokuapp.com/http://www.geoplugin.net/json.gp?ip=" + data.ip, function (response) {
        if(response.geoplugin_countryName) {
                $('.getLocation').html(response.geoplugin_countryName);
            } else {
                $('.getLocation').html('Netherlands');
            }
            });
        });
    }
    render()
    {
        return(
            <div className="getLocation"></div>
        )
    }
}

export default CurrentLocation;

