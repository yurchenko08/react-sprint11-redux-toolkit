import uiSlice, { uiActions } from "../store/ui_slice.js";

describe("UI slice", () => {
  test("Card Element should return the initial state", () => {
    expect(uiSlice.reducer(undefined, { type: undefined })).toEqual({
      cartIsVisible: false,
    });
  });

  test("Card Element should become visible", () => {
    const previousState = { cartIsVisible: false };

    expect(uiSlice.reducer(previousState, uiActions.toggle())).toEqual({
      cartIsVisible: true,
    });
  });

  test("Card Element should become unvisible", () => {
    const previousState = { cartIsVisible: true };

    expect(uiSlice.reducer(previousState, uiActions.toggle())).toEqual({
      cartIsVisible: false,
    });
  });
});
