import DatePicker from 'react-native-datepicker';
import {View} from 'react-native';
import  React, {Component } from 'react';


export default class Picker extends Component{

    state={
        date:this.props.date,
    }
    render(){
        return(
            <View style={{width:this.props.width, height:this.props.height}}>
                <DatePicker
                        style={{flex:1}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="19-02-2020"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {this.props.setDate();
                                                this.setState({date:date})}}
                    />
            </View>
        );
    }
}