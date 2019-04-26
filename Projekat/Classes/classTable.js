import Draggable from 'react-native-draggable';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
export default class Table  {
    constructor(shape,table_capacity,wedding,id,x,y,peopleontable)
    {
       this.id=id;
        this.shape=shape;
        this.capacity=table_capacity;
        this.wedding=wedding;
        this.waiter=null;
        this.families=[];
        this.x=x;
        this.y=y;
        this.peopleontable=peopleontable;
    }
    
}