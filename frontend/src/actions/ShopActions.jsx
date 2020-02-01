import ShopService from '../services/ShopService';

export function loadShop(shopId) {
    return async dispatch => {
        try {
            const shop = await ShopService.get(shopId);
            dispatch(setShop(shop));
        } catch (err) {
            console.log(`cant get shop ${shopId}`);
        }
    }

}


function setShop(shop) {
    return {
        type: 'SET_SHOP',
        shop
    }
}



export function updateShopSettings(shop) {
    return async dispatch => {
        try {
            const shopToUpdate = await ShopService.put(shop);
            await dispatch({ type: 'SET_SETTINGS', shopToUpdate })
        } catch (err) {
            console.log(`cant get shop - shop action ${shop._id}`);
        }
    }

}
export function CreateNewShop(userId, userName) {
    return async dispatch => {
        try {
            let shop = createShop(userId, userName)
            shop = await ShopService.add(shop);
            dispatch({ type: 'ADD_SHOP', shop });
            return shop
        } catch (err) {
            console.log(`cant add shop - shop action `);
        }
    }

}


export function saveComment(comment) {

    return async dispatch => {
        try {
            const commentToAdd = await ShopService.post(comment);
            await dispatch({ type: 'ADD_COMMENT', commentToAdd })
        }

        catch {
            console.log(`cant add Comment`);
        }
    }

}


function createShop(userId, userName) {

    let shop = {
        comments: [],
        info: {
            name: 'My Shop',
            description: '',
            instagram: '',
            facebook: '',
        },
        owner: {
            id: userId,
            name: userName,
        },
        style: {
            bgColor: '',
            theme: '',
            videoUrl: '',
            coverImgUrl: '',
            logoUrl: '',
            darkMode: ''
        },

    }
    return shop
}


