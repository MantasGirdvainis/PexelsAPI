import { useState } from "react";

export const useLocalStorage = (key: number | string, value: number | string) => {

    const itemStatusInLocalStorage = localStorage.getItem(key.toString()) ? true : false;

    const [itemStatus, setItemStatus] = useState<boolean>(itemStatusInLocalStorage);

    const saveItem = () => {
        setItemStatus((prev) => !prev);
        localStorage.setItem(key.toString(), value.toString());
    };

    const removeItem = () => {
        setItemStatus((prev) => !prev);
        localStorage.removeItem(key.toString());
    };

    return { itemStatus, saveItem, removeItem };
};
