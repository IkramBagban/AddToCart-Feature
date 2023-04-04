// import { useSelector } from 'react-redux';

import { View,Text } from "react-native";
import Cart from "../components/Cart";
// import { useSelector } from "react-redux";

const TotalScreen = () => {
  // const carts = useSelector((state) => state.data.carts);
  // const total = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <View>
      <Text>Total: total.Text</Text>
      {/* <Cart name={route.params.myProduct[0].name} productId={route.params.myProduct[0].name} img={route.params.myProduct[0].img} price={route.params.myProduct[0].name} /> */}
    </View>
  );
};

export default TotalScreen;
