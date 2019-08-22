import React, { Component } from 'react';
import Agency from "./../governanace/agency"

class ContactIfo extends Component {
    render(){
      return (
        <section className="ContactIfo">
              <div class="ContactIfo_top">
                <h1>Contact information</h1><p>Provide a sufficient number of people for your partner to contact</p>
              </div>
                  
              <Agency />
              <div class="clearfix"></div>
              <a target="_blank" href="#" class="button">Accept information<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a>

        </section>
      );  
    };  
  };
  
  export default ContactIfo;
  