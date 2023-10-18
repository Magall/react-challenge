import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ELEMENTS, ELMENTS_SINGLE_LETTER } from "../constants";

interface iNames {
    firstNameCalculated: Array<number>;
    lastNameCalculated: Array<number>;
}

const initialState: iNames = {
    firstNameCalculated: [],
    lastNameCalculated: [],
};

interface iCalculateElementAcronym {
    firstName: string;
    lastName: string;
}

const namesSlice = createSlice({
    name: "names",
    initialState,
    reducers: {
        calculateElementsAcronym(state, action: PayloadAction<iCalculateElementAcronym>) {

            const firstNameCalculated = calculateElementHelper(action.payload.firstName);
            const lastNameCalculated = calculateElementHelper(action.payload.lastName);

            state.firstNameCalculated = firstNameCalculated;
            state.lastNameCalculated = lastNameCalculated;

        },
    },
});

function isLowerCase(str:string) {
    return str === str.toLowerCase() &&
        str !== str.toUpperCase();
}

function isUpperCase(str:string) {
    return str !== str.toLowerCase() &&
        str === str.toUpperCase();
}

const calculateElementHelper = (name: string): Array<number> => {
    let index = 0;
    const resp = [];
    while (index < name.length) {

        if (isUpperCase(name.charAt(index))) {
            if (index === name.length - 1) {
                if (ELMENTS_SINGLE_LETTER.includes(name.charAt(index))) {
                    resp.push(index);
                    index += 1
                    continue;
                }
            }
            if (isLowerCase(name.charAt(index + 1))) {
                if (ELEMENTS.includes(name.charAt(index) + name.charAt(index + 1))) {
                    resp.push(...[index, index + 1])
                    index += 2
                    continue;
                }
                else {
                    if (ELMENTS_SINGLE_LETTER.includes(name.charAt(index))) {
                        resp.push(index);
                        index += 1
                        continue;
                    }
                }
            }
            else {
                if (ELMENTS_SINGLE_LETTER.includes(name.charAt(index))) {
                    resp.push(index);
                    index += 1
                    continue;
                }
            }
        }
        else {
            index += 1;
        
        }
        index+=1;
    }
    return resp
}

export const { calculateElementsAcronym } = namesSlice.actions;
export default namesSlice.reducer;
