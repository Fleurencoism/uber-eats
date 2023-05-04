import { useState, useEffect } from "react";
import{Card, Table} from "antd";
import { DataStore } from "aws-amplify";
import{ Restaurant}from '../../models';

const OtherRestaurants = () => {

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        DataStore.query(Restaurant).then(setOrders);
    },[]);
    
    

    //console.log(orders);

    
    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',

        },
        {
            title: 'Image link',
            dataIndex: 'name',
            key: 'action',
            render: (name, restaurant) => 
            <a href={restaurant.image} 
            target = {"link"} 
            rel = {"image"}> {restaurant.name} </a>
           
        },
    ];
    return (
        <Card title = 'Other Restaurants' style={styles.page}>
            <Table
            dataSource={orders}
            columns={tableColumns}           
            />
        </Card>
    );
};
const styles = {
    page:{
        margin: 20,
    },
}
export default OtherRestaurants;