import React, { Component } from "react";
import Box from "./applicationBox";
import Header from "./applicationHeader";

class Tracker extends Component {
  state = {
    count: 0,
    boxes: [
      {
        id: 0,
        title: "Upcoming",
        applications: [
          {
            company: "Amazon",
            position: "SDE",
            status: "onsite",
            date: "2020-01-26",
            portal: "URL",
            resume: "URL"
          }
        ]
      },
      {
        id: 1,
        title: "Pending",
        applications: [
          {
            company: "Citrix",
            position: "SDE",
            status: "Video Interview",
            date: "2020-01-11",
            portal: "URL",
            resume: "URL"
          }
        ]
      },
      {
        id: 2,
        title: "Done",
        applications: [
          {
            company: "Facebook",
            position: "PM",
            status: "Offer",
            date: "2019-10-4",
            portal: "URL",
            resume: "URL"
          },
          {
            company: "Bloomberg",
            position: "SDE",
            status: "Rejected",
            date: "2019-09-08",
            portal: "URL",
            resume: "URL"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />

        {this.state.boxes.map(box => (
          <Box key={box.id} box={box}></Box>
        ))}
      </div>
    );
  }
}

export default Tracker;
