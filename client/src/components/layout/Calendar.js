import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "daypilot-pro-react";
import "../layout/Calendar.css";

const styles = {
  left: {
    float: "left",
    width: "220px"
  },
  main: {
    marginLeft: "220px"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewType: "Week",
      headerHeight: 30,
      hourWidth: 60,
      cellHeight: 30,
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      // onEventClick: args => {
      //   let dp = this.calendar;
      //   DayPilot.Modal.prompt("Update event text:", args.e.text()).then(function(modal) {
      //     if (!modal.result) { return; }
      //     args.e.data.text = modal.result;
      //     dp.events.update(args.e);
      //   });
      // },
    };
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      startDate: DayPilot.Date.today(),
      events: [
        {
          id: 1,
          text: "Event 1",
          start: DayPilot.Date.today().addHours(10),
          end: DayPilot.Date.today().addHours(14)
        },
        {
          id: 2,
          text: "Event 2",
          start: "2018-06-02T10:00:00",
          end: "2018-06-02T11:00:00",
          barColor: "#38761d",
          barBackColor: "#93c47d"
        }
      ]
    });
  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            cellWidth={30}
            cellHeight={30}
            dayHeaderHeight={30}
            titleHeight={30}
            showMonths={3}
            skipMonths={3}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
        </div>
      </div>
    );
  }
}

export default Calendar;