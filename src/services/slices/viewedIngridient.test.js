import viewedIngridient, { initialState, currentIngridient} from "./viewedIngridient";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';

const mockCurrentIngridient = {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    name: "Краторная булка N-200i",
    price: 1255,
    proteins: 80,
    type: "bun",
    _id: "643d69a5c3f7b9001cfa093c"
}

describe("currentIngridient reducer", () => {
    
    it("should return initial state", () => {
        expect(viewedIngridient(undefined, {})).toEqual(initialState);
    });

    it("should return currentIngridient", () => {
        const expectedState = { ...initialState, currentIngridient: mockCurrentIngridient};
        expect(viewedIngridient(initialState, currentIngridient(mockCurrentIngridient))).toEqual(expectedState)
    } )
});