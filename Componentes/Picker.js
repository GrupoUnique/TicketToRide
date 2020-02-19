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
                        style={{width:this.props.width}}
                        customStyles={{dateText:{fontSize:12},dateInput:{height:this.props.height, marginTop:this.props.top, borderRadius:5}}}
                        date={this.state.date}
                        mode="date"
                        placeholder="  /  /    "
                        format="DD-MM-YYYY"
                        minDate="19-02-2020"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={(date) => {
                            this.setState({date:date});
                            this.props.setDate(this.state.date);
                                                }}
                    />
            </View>
        );
    }
}