import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardHeader, CardText } from 'material-ui'


class Cards extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Cards-layout">
          <Card style={{margin: "10px", textAlign: "center"}}>
            <CardHeader
              textStyle={{fontSize: "28px", fontWeight: "bold", padding: "0px"}}
              title="Mission"
            />
            <CardText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            </CardText>
          </Card>
          <Card style={{margin: "10px", textAlign: "center"}}>
            <CardHeader
              textStyle={{fontSize: "28px", fontWeight: "bold", padding: "0px"}}
              title="Vision"
            />
            <CardText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

// Cards.propTypes = {

// };

export default Cards;