import{Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../../data/data/dashboard/dishes.json';

const DeatailedOrder = () => {
    const total = dishes.reduce((sum,dish)=>{
        return sum + (dish.quantity * dish.price)
    }, 0);
    return (
        <Card title={'Order Number'} styles={styles.page}>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label='Order Status'>APPROVED</Descriptions.Item>
                <Descriptions.Item label='Customer'>Marlon</Descriptions.Item>
                <Descriptions.Item label='Customer Address'>123 Chestnuthill drive</Descriptions.Item>
            </Descriptions>
            <Divider />
            <List
                dataSource={dishes}
                renderItem={(dishItem)=>(
                    <List.Item>
                        <div style={styles.dishItem}>{dishItem.name} x{dishItem.quantity}</div>
                        <div>${dishItem.price}</div>
                    </List.Item>
                )}
            >
            </List>
            <Divider/>
            <div style={styles.totalContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrice}>$55</h2>
            </div>
            <Divider />
            <div style={styles.buttonsContainer}>
                <Button
                    block
                    danger
                    type='primary'
                    size='large'
                    style={styles.button}
                >
                    Decline Order
                </Button>
            </div>
                <Divider />
                
            <div style={styles.buttonsContainer}>
                <Button
                    block                    
                    type='primary'
                    size='large'
                    style={styles.button}
                >
                    Accept Order
                </Button>
            </div>
                <Divider />
            <div style={styles.buttonsContainer}>
                <Button
                    block                    
                    type='default'
                    size='large'
                    style={styles.button}
                >
                    Food is done
                </Button>
            </div>
        </Card>
    );
};

const styles = {
    page:{
        margin: 20,
    },
    dishItem:{
        fontWeight:'bold',
    },
    totalContainer:{
        flexDirection: 'row',
        display: 'flex',
    },
    totalPrice:{
        marginLeft: 'auto',
    },
    buttonsContainer:{
        display:'flex',
        paddingBottom: 30,

    },
    button:{
        marginRight: 5,
        marginLeft: 5,
    },
}
export default DeatailedOrder;