import cartSlice, { cartActions } from "../store/cart_slice.js";

describe("Cart slice", () => {
  test("Cart should return the initial state", () => {
    expect(cartSlice.reducer(undefined, { type: undefined })).toEqual({
      items: [],
      totalQuantity: 0,
    });
  });

  test("should add item to empty cart", () => {
    const previousState = { items: [], totalQuantity: 0 };
    const newItem = {
      id: 0,
      price: 5,
      quantity: 1,
      totalPrice: 5,
      title: "New Item",
    };

    expect(
      cartSlice.reducer(previousState, cartActions.addItemToCart(newItem))
    ).toEqual({
      items: [
        { id: 0, price: 5, quantity: 1, totalPrice: 5, title: "New Item" },
      ],
      totalQuantity: 1,
    });
  });

  test("should add the same item to cart", () => {
    const previousState = {
      items: [
        {
          id: 0,
          price: 5,
          quantity: 1,
          totalPrice: 5,
          title: "The First Item",
        },
      ],
      totalQuantity: 1,
    };

    const newItem = {
      id: 0,
      price: 5,
      quantity: 1,
      totalPrice: 5,
      title: "The First Item",
    };

    expect(
      cartSlice.reducer(previousState, cartActions.addItemToCart(newItem))
    ).toEqual({
      items: [
        {
          id: 0,
          price: 5,
          quantity: 2,
          totalPrice: 10,
          title: "The First Item",
        },
      ],
      totalQuantity: 2,
    });
  });

  test("should add another item to cart", () => {
    const previousState = {
      items: [
        {
          id: 0,
          price: 5,
          quantity: 1,
          totalPrice: 5,
          title: "The First Item",
        },
      ],
      totalQuantity: 1,
    };

    const newItem = {
      id: 1,
      price: 7,
      quantity: 1,
      totalPrice: 7,
      title: "The Second Item",
    };

    expect(
      cartSlice.reducer(previousState, cartActions.addItemToCart(newItem))
    ).toEqual({
      items: [
        {
          id: 0,
          price: 5,
          quantity: 1,
          totalPrice: 5,
          title: "The First Item",
        },
        {
          id: 1,
          price: 7,
          quantity: 1,
          totalPrice: 7,
          title: "The Second Item",
        },
      ],
      totalQuantity: 2,
    });
  });

  test("should remove one of the repeated items out of cart", () => {
    const previousState = {
      items: [
        { id: 0, price: 5, quantity: 1, totalPrice: 5, name: "The First Item" },
        {
          id: 1,
          price: 7,
          quantity: 2,
          totalPrice: 14,
          title: "The Second Item",
        },
      ],
      totalQuantity: 3,
    };

    const removedItemId = 1;

    expect(
      cartSlice.reducer(
        previousState,
        cartActions.removeItemFromCart(removedItemId)
      )
    ).toEqual({
      items: [
        { id: 0, price: 5, quantity: 1, totalPrice: 5, name: "The First Item" },
        {
          id: 1,
          price: 7,
          quantity: 1,
          totalPrice: 7,
          title: "The Second Item",
        },
      ],
      totalQuantity: 2,
    });
  });

  test("should remove one of the different items out of cart", () => {
    const previousState = {
      items: [
        {
          id: 0,
          price: 5,
          quantity: 1,
          totalPrice: 5,
          title: "The First Item",
        },
        {
          id: 1,
          price: 7,
          quantity: 1,
          totalPrice: 7,
          title: "The Second Item",
        },
      ],
      totalQuantity: 2,
    };

    const removedItemId = 1;

    expect(
      cartSlice.reducer(
        previousState,
        cartActions.removeItemFromCart(removedItemId)
      )
    ).toEqual({
      items: [
        {
          id: 0,
          price: 5,
          quantity: 1,
          totalPrice: 5,
          title: "The First Item",
        },
      ],
      totalQuantity: 1,
    });
  });

  test("should remove the last item out of cart", () => {
    const previousState = {
      items: [
        {
          id: 1,
          price: 7,
          quantity: 1,
          totalPrice: 7,
          title: "The Second Item",
        },
      ],
      totalQuantity: 1,
    };

    const id = 1;

    expect(
      cartSlice.reducer(previousState, cartActions.removeItemFromCart(id))
    ).toEqual({ items: [], totalQuantity: 0 });
  });
});
