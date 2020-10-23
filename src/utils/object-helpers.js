export const updateObjInArray = (items, itemId, propName, newObjProps) => {
    items.map(u => {
        if(u[propName] === itemId) {
            return {
                ...u,
                ...newObjProps
            }
        }
        return u;
    })
} 