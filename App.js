import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableHighlight, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { ThemeProvider, Toolbar } from 'react-native-material-ui';
import UITheme from './apps/styles/Theme.Style';
import Container from './apps/components/Container';
import ContentArray from './apps/constants/ContentArray';
import Constants from './apps/constants/Constants';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Styles from './apps/styles/Styles';
import Dash from 'react-native-dash';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

// Icons use for the Expands and Collapse View
const icons = {
  'plus': require('./assets/plus.png'),
  'minus': require('./assets/minus.png')
}

export default class App extends Component {
  // Set the state values
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => { 
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) { 
    this.setState({ activeSection: section });
  }

  // Render the Header View
  _renderHeader(section, i, isActive) { 
    let icon = isActive ? icons['minus'] : icons['plus'];
    return (
      <Animatable.View
        duration={400}
        transition="backgroundColor">
        <View style={{ flexDirection: 'row' }}>
          <View style={[Styles.headerVertical, { top: i == 0 ? 30 : 0 }]} />
          <View style={[Styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
            <TouchableHighlight underlayColor='#f1f1f1' style={{ backgroundColor: Constants.white }}>
              <Image style={{ width: 25, height: 25 }} source={icon} />
            </TouchableHighlight>
            <Text style={[Styles.headerText, { color: isActive ? Constants.black : Constants.gray }]}>{section.title}</Text>
          </View>
        </View>
      </Animatable.View>
    )
  }

  // Render the Content View
  _renderContent(section, i, isActive) { 
    return (
      <Animatable.View
        duration={400}
        transition='backgroundColor'>
        <View style={{ flexDirection: 'row' }}>
          <Dash dashGap={1} style={Styles.dashLine} />
          <View style={[Styles.content, { justifyContent: 'center', alignItems: 'center' }]} >
            <Animatable.Text style={{ marginLeft: 30 }} animation={isActive ? 'bounceIn' : undefined}>
              {section.content}
            </Animatable.Text>
            {i % 2 == 0 ? <TouchableHighlight style={{ backgroundColor: '#B0B0B0', width: 100, alignItems: 'center', justifyContent: 'center', marginTop: 10, padding: 5, borderRadius: 5, borderColor: '#585858', borderWidth: 1 }}>
              <Text style={[Styles.buttonText]}>{section.title}</Text>
            </TouchableHighlight> : null}
          </View>
        </View>
      </Animatable.View>
    )
  }

  render() {
    return (
      // Theme Provider use for set the Theme 
      <ThemeProvider uiTheme={UITheme}>
        <Container>
          <StatusBar backgroundColor='rgba(0, 0, 0, 0.2)' translucent />
          <Toolbar leftElement='menu' />
          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>HALLO, SEBASTIAN</Text>
            </View>
            <View style={Styles.verticalLine} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Der Weg zu deinem perfekten Lacheln</Text>
            </View>
            <ScrollView style={{ margin: 20 }} >
              {/* Accordion use for the Collapse and Expands the View */}
              <Accordion
                activeSection={this.state.activeSection}
                sections={ContentArray}
                touchableComponent={TouchableOpacity}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                duration={400}
                onChange={this._setSection.bind(this)} />
            </ScrollView>
          </View>
        </Container>
      </ThemeProvider>
    );
  }
}