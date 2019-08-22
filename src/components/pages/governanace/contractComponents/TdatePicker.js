import React , {Component} from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class TDataPicker extends Component {
   
      constructor(props) {
        super(props);
        this.state = this.getInitialState();
      }
      
      // getInitialState() {
      //   return {
      //     from:new Date(this.props.timelineStart),
      //     to:new Date(this.props.timelineEnd),
      //   };
      // }
      getInitialState() {
        return {
          from: undefined,
          to: undefined,
        };
      }
    
      handleDayClick = (day) =>{
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        console.log(day,'day')
        console.log(range,'range')
      }
      handleResetClick = () => {
        this.setState(this.getInitialState());
      }
      render() {
        const { from, to } = this.state;
        if(from != undefined && to != undefined){
        var time={
          start: from.toLocaleDateString(),
          end: to.toLocaleDateString()
        }
        this.props.times(time)}
        const modifiers = { start: from, end: to };
        return (
          <div className="RangeExample">
            
           
            <DayPicker
              className="Selectable"
              numberOfMonths={3}
              selectedDays={[from, {from, to}]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />


            {/*Styling on calender */}        
            <Helmet>
              <style>{`
                .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                    background-color: rgba(255,255,255,0.1) !important;
                    color: #8E8D92;
                }
                .Selectable .DayPicker-Day {
                    border-radius: 0 !important;
                }
                .Selectable .DayPicker-Day--start {
                  border-radius: 100px !important;
                  border-top-right-radius: 0px !important;
                  border-bottom-right-radius: 0px !important
                }
                .Selectable .DayPicker-Day--end {
                  border-radius: 100px !important;
                  border-top-left-radius: 0px !important;
                  border-bottom-left-radius: 0px !important
                }
                .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
                  position: relative;
                  background-color: #f1f1f1;
                  color: #1b2229;
              }
                `}</style>
            </Helmet>
          
          </div>
        );
      }
    }

export default TDataPicker;