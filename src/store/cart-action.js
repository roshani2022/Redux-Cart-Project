import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "feching",
        message: "geting cart data!",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-project-4a610-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("geting cart data failed");
      }

      const data = await response.json();

      return data;
    };
      
    try {
      const cartData = await fetchData();
      console.log('cart data',cartData)
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "get cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "geting cart data failed!",
        })
      );
    }
  };
};

export const sentCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-cart-project-4a610-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sendind cart data failed!",
        })
      );
    }
  };
};
