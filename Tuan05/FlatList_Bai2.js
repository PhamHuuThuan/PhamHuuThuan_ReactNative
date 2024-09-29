import { Text, Image, View, FlatList, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const cartQuantity = 5;

const DATA = [
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/4400/39b8/47a25e463563954abcba9a885fd06c1a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neVdCLXTvXQBd-6Y8cl3DWh951yz3GE1pQKliANsNAQcfo2f3SeWwZcfx3H3JMVIRXaEgoTIfsZ4oVpEJswj2-qniozbdbWWSROegHqsIGwLILgcUA-7DwJ8yTwExRhquMUdOyswqtNMBFGjR2GL9BSaGPlroYJy8ENG2MU-wjXMfgVJk6w7scAoo6fwUr4aLbwPwUno4UcXowemTq~m5yliEzvkE58aZgAMSoYfOC1Lymrol3i8Aq8Ve2EOqPBSU4k~Htqaa3ZdvDSD1MHpxEM2Ir-pbP8hS75tG56456W73SK-en~CR94zLwyPZJG6sls7MHJt2~PRJwVmXzwMiA__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  },
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/c12d/6fdf/653e7955fdd212ca1c4f3e84a556faf8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlEChIvctUODC-VoC5SD16Agx97XKoECqfjeYaD7XVSSoKz8UXx33RNK8nZewVl5oIDyt9694MBCqqAZ9CpvfoWNoQejfR04OmvDEy0yvJPMmQl3m9HJfTILzYjb7FN9RoOOzo-Br7GuPpydK6SqmjQt5niXN7-t1eNxcpPQQ2cFHmubWzaNO0~rjrn4NzdPwiex8CZ1w~WrsjJKxoownTUVitKL-CV8nxzCJk3~1JuJ4kNX8EIUjVMDOoGYtqUB3zXwcmG~5rCBHxY2K0cbwudH~-TgrKxMwGTzkh69wFZa4ooy~datPaRio00a~L931Oycz-e4p~KK3z3VRUS4uw__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  },
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/e7a9/6613/19b8bd78c56e1818b8e5c5cac103b98a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jrrExTgi2WZuNP146WxG8rsXRrNMoWWFbnvx9vuoWv3D4Nh5VMx6md2e38KXAUf74XXQAPJk4w7K3c25feEuUSTehI-Uo5EY3Pp9A4WbhQKFUjFde~LhPMAoicllWUul3gf8REXojMPmuCE6xkFqp-mirONQLHwt1ChlaXG3-Sycj0l8oMfHvyKPgXMupLBso59Y4E~IRJF2mnvhiFkgyXW~wbb84DPLT~bwRQ3xCbxzeGHBM3e8Nabhhj7fjXfKQrA7NBAlihTPOOe6EEnjTM0WHYEo~tvlckBeMdpMCW7VDNJhNrkyb6Z0DX1Q6koAHEmKEumUFJ7kutYa6L-Ksg__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  },
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/160f/3e8a/05ab63a7c5f544ef7b8f5c6c6e5d1265?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbrrV4aqXB2PITIZvPqJVRx19VYxw1G~57EOQxwCTN5bKDo6mM28k2cr6lkC4pLf-FUVdByXxpM-Q5wdIV5Z~P8Fs~ykiX90265nGznkbqUWT7JXPPkAbrc7FQ8YZgI4VyING~pqyuoI85tGOtQx2-ec26yuZWk75SSZTgTKzVruTNmorr85l3iD4fQcptuAFJgujXyGkQwcUTzX2Blri-RUbinfM6~OP8b7QtktvJo65QKNAv~p55EsD04FF2RTxBipRsKETTmX-KT9mCUTEGCxmcoSFjPtrRLOVV0W3eVxqikBy6337LOk4jMjKxIZf~0ImaFq~HH1cIViFrph4g__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  },
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/affd/f93f/aa4f39be8f379f8535c243245368ffad?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K4uKo1F4NUKmNb2djNBg0BmBEeHs-d~41X0JqyCFHc3wDvVvKZuw9zc2vtU2rUp~lJZnGUFhsNsETC0PnH4aTpKk97bxBAW2xr6QghGnHK1ldVEKFSapLeKJ2zImEJMyZEPM0neIHYaZOO6gWvIwa5m2SlkC3K1Ec7~D8oYJhzFn3vY7LKiwE2K2fZrcG8-w25ZUFIrs8Gup9etBOJVVEBckxPrXnVsjn1agHHtPr14uCjY1yukwAy171S~VsslSNh8TrBvPjz7k2ZTBSHIH~6kBH6z7tmCHl686bb4Q6pqjTaR-pWeJndsRMcJpu2XcUENc4l4mZiSemVbI11vLSg__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  },
  {
    name: 'Cáp chuyển từ cổng USB sang PS2...',
    img: 'https://s3-alpha-sig.figma.com/img/d41c/7988/b78d982cc3ffe7fef9c3256310825f19?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCL78RAFwA4rV1L9EkcEt-UMaeBPqZLR1QRiq~nJNGD1IFtHBemSToktzr5g0j2ypr9ZiHmrJCqIiNNk3uK0W-nQpl66Zv596obDW080u~1qgSwn-WjGmZ~WiBR4YHKYDLV3zmx59Ln1eTVzW3cj5EstHbGgmRmZXf9Lu3swZ37VZpL~EJt1rjk4qmF3E6be0NBuLfAhgh9e5QU-7d-UK5B4HsF5Seg6PION362PXmB8NvVLx4kjxAs~l9h~Pcf3CBAaZU4K3gflVhgLlCpEn1cc9D5DRVG3eCAYBe18XJudrSP5kKWWAf~9ivJSqEGNes~XX57nr1dH1kg05WqORA__',
    price: '69.000',
    avgReview: 4,
    quantityReview: 15,
    discount: 39
  }
];

const Item = ({item})=> (
    <View style={styles.item}>
      <Image source={item.img} style={styles.itemImg}/>
      <View style={styles.infoItem}>
        <Text style={{fontSize: 14, fontWeight: '400'}} numberOfLines={2}>{item.name}</Text>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>{item.avgReview} ★</Text>
        <Text style={styles.reviewCount}>({item.quantityReview} reviews)</Text>
      </View>
      <View style={styles.priceItem}>
          <Text style={styles.priceText}>{item.price}đ</Text>
          <Text style={styles.discountText}>-{item.discount}%</Text>
        </View>
      </View>
    </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headbar}>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d33bafca912760fa74f8d3b0d6f27ae3'}} style={styles.iconImg}/>
        <SafeAreaView style={styles.searchBox}>
          <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/30dcd67b885a6a4eec8ad26fd207a1f7'}} style={styles.iconImg}/>
          <TextInput placeholder="" value="Dây cáp USB" style={{fontSize: 13}}></TextInput>
        </SafeAreaView>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/219dba253956d91b7d63d610691a376e'}} style={styles.iconImg}/>
                {cartQuantity > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartQuantity}</Text>
        </View>
      )}
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/deaa836dd3fa63ffaad9222d6e8e6f3b'}} style={styles.iconImg}/>
      </View>
      <View style={styles.listProduct}>
        <FlatList data={DATA}
        renderItem = {({item}) => <Item item = {item}/>}
        numColumns={2}
        showsVerticalScrollIndicator={false}>
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
    flexDirection: 'column',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10
  },
  itemImg:{
    width: 155,
    height: 90
  },
  infoItem:{
    height: '100%',
    padding: 5
  },
  searchBox:{
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 192,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  priceItem:{
    flexDirection: 'row'
  },
  priceText:{
    fontSize: 12,
    fontWeight: 'bold'
  },
  discountText:{
    fontSize: 12,
    fontWeight: 400,
    paddingLeft: 20,
    color: '#969DAA'
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  reviewText: {
    fontSize: 16,
    color: '#FFD700',
    marginRight: 5,
  },
  reviewCount: {
    fontSize: 14,
    color: '#555',
  },
  badge: {
    position: 'absolute',
    right: 45,
    top: 1,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});
