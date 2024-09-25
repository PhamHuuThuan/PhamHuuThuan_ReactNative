import { Text, Image, View, FlatList, SafeAreaView, StyleSheet, Pressable } from 'react-native';

const DATA = [
  {
    name: 'Ca nấu lẩu, nấu mì mini đa năng',
    shop: 'Devang',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/24c0a0ab7c3af6add1660197f72891d7'
  },
  {
    name: '1KG KHÔ GÀ BƠ TỎI hàng loại 1',
    shop: 'LTD Food',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b4cde0b59a9259ee0a55df34059f19a1'
  },
  {
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    img: 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ngVv61KvYLuwfDqXVB~9pWl3vzTyjSk5qqO9BW73xl-zTYkL7d73C1-QF5bw5zQqU0d-MJGpt7iXezrH0sgqWVRXYN-RtR5ELhWh5DzdC8xkvMFJ7ReNyyNeU-xwfF3r-x-tQ-8NkI9nBDeqrKcQUuTwpyJODimt6Eyd-jyp9M9cew92UjtBNmXH85t1zbNX~HPfHTr643qx6KT1IPRtQH-Q1kGOQdFjjML71A9EKqKR3ncFmK-JrPXANbkP9Itn9laAg0qm8oUUqGPuvXWYZbbLSCoG~EeObFOSSzbxl5S3QMqb0Lnuv2TtFWmT7pC-hg2D-4ZoTiCqoqJdAR97vQ__'
  },
  {
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    img: 'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1vzvKjBJRPkyPrN~d7yaEUl~XfmwH4SFswQm0XlPNmVE77MOQ~ZVJUf3QJzq6F6elJFtXf6GjQUdjFeYJA0PS4XdfkIfdxcKj5zSt-Isf6JItVjMbZzP0OEuk9Yk4TpYRN-tsrKk6VmT8mQ0I7ywPb2HSoVOrR4X-3SFzhuxc2Rz0egnk~CAZRdKBuE5QqYGdbNNL3-g8WhxZvZGwg99Jj9AcpiiglSgfy~FXZCBGNPSq-QGMTr5ndu1jSscTYmpIqs3rvFrOUsVjI~KIeiquMkBxlMN9hU-m7abQ4Of5c8Pi1VExqwQpqhlBbja~dBq47-Ku~Qrb0p6-nQhPnpQw__'
  },
  {
    name: 'Đắc nhân tâm',
    shop: 'Thiên Long Store',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/416d2d104c4ce2931b47dc7ea9f149e8'
  },
  {
    name: 'Hoàng tử bé',
    shop: 'Fahasa',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/53b9a268de48de19d1442c4391896cd1'
  },
  {
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    shop: 'Fahasa',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c7299b11dd28b9014f6e850cb9b8628e'
  },
  {
    name: 'Một lít nước mắt',
    shop: 'Thiên Long',
    img: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/88a1971547a4b97b471738ec9927ffdb'
  },
];

const Item = ({item})=> (
    <View style={styles.item}>
      <Image source={item.img} style={styles.itemImg}/>
      <View style={styles.infoItem}>
        <Text style={{fontSize: 13, fontWeight: '400'}} numberOfLines={1}>{item.name}</Text>
        <Text numberOfLines={1}>Shop {item.shop}</Text>
      </View>
      <Pressable style={styles.chatBtn}>
        <Text style={{color: 'white'}}>Chat</Text>
      </Pressable>
    </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headbar}>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d33bafca912760fa74f8d3b0d6f27ae3'}} style={styles.iconImg}/>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/219dba253956d91b7d63d610691a376e'}} style={styles.iconImg}/>
      </View>
      <View style={styles.listProduct}>
        <FlatList data={DATA}
        renderItem = {({item}) => <Item item = {item}/>}>
        </FlatList>
      </View>
      <View style={styles.headbar}>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1a446c0f45ccb4a11d6673e63b0bb98f'}} style={styles.iconImg}/>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3908d12ddb406a36b2cbc9900ed81703'}} style={styles.iconImg}/>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/42e7f8bc6bcf9068d95405b7b3b151b1'}} style={styles.iconImg}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  headbar:{
    height: 42,
    backgroundColor: '#1BA9FF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconImg:{
    width: 24,
    height: 24
  },
  listProduct:{
    flex: 4,

  },
  item:{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#C4C4C4',
    borderBottomWidth: 1
  },
  itemImg:{
    width: 74,
    height: 74
  },
  infoItem:{
    height: '100%',
    width: '35%',
    paddingTop: 10
  },
  chatBtn:{
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
