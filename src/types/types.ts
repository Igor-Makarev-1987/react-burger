import Ingridient from "../components/Ingridients/Ingredient";
import constructorIngridientsSlice from "../services/slices/constructorIngridientsSlice";

export enum INGREDIENT_TYPES {
    bun = "bun",
    sauce = "sauce",
    main = "main",
}

export enum NAV_TYPES {
    BUNS = "buns",
    SAUCES = "sauces",
    FILLINGS = "fillings",
  }

export interface UserUpdateInput {
    email?: string;
    password?: string;
    name?: string;
}

export interface IIngredient {
    // _id: string;
    // name: string;
    // type: string;
    // proteins: number;
    // fat: number;
    // carbohydrates: number;
    // calories: number;
    // price: number;
    // image: string;
    // image_mobile: string;
    // image_large: string;
    // __v: number;

    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    qty: number;
    type: string;
    _id: string;
}

export interface IDragObject extends IIngredient {
    index: number
}

export interface IIngredientDetail extends IIngredient {
    id?: number
}

export interface  IIngredientResponse {
    success: boolean;
    data:  never[];
}

export interface IIngredientDetailResponse extends IIngredient {
    id?: number;
    order: {
        number: never[]
    }
}

export interface IProps {
    current: string
}

// export interface IIngredients {
//     data: IIngredient
//     onClick: () => void
// }

export interface IConstructorIngridient {
    constructorIngridient: {
        bun: never[],
        ingridients: never[]
    },
    error: null;
    isIngredientDragged: boolean,
    isLoading: boolean
}

type TBun = {
    name: string;
    price: number;
    image: string
}

// constructorIngridients: {
//     constructorIngridient: {
//         bun: never[];
//         ingridients: never[];
//     };
//     isLoading: boolean;
//     error: null;
//     isIngredientDragged: boolean;
// };

export type TFormValues = {
    name: string;
    email: string;
    password?: string;
};

export type TFormInput = {
    name: string;
    email: string;
    password: string;
}

export type TLogin = {
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: {
        email: string,
        name: string
    }
} 

export type TRegisterRes = TLogin & {authToken?: string} 

export type TForgotPassRes = {
    success: boolean
    message: string
}

export type TGetUserRes = Pick<TLogin, "success" | "user">

export type TRefreshTokenRes = Pick<TLogin, "success" | "accessToken" | "refreshToken">

export type TProfilePageProps= {
    activeTab: string
}

export type TFeed = {
    success: boolean;
    orders: TFeedOrder[];
    total: number;
    totalToday: number;
};

export type TFeedOrder = {
    _id: string;
    ingredients: string[];
    status: string;
    name: string;
    createdAt: string | number | Date;
    updatedAt: string;
    number: number;
};

export type TFeedOrderIngridients = {
    ingredients: string[];
    number: number;
    name: string;
    status: string;
    
}

export type TFeedOrderResponse = Pick<TFeed, "success" | "orders">;

export type TSubmitOrder = {
    ingredientIds: string
}

export type TRegister = {
    email: string
    name: string
    password: string
}

export type TResetPass = {
    password: string
    token: string
}

export type TUser = {
    success: boolean
    user: TRegister
}
