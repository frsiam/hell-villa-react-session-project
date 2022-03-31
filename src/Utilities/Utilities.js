const getFromLocalStorage = () => {
    const exist = localStorage.getItem('shopping_cart')
    const x = JSON.parse(exist)
    return x;
}

const addToLocalStorage = (id) => {

    const exist = getFromLocalStorage()
    let shoppingCart = {}

    if(!exist){
        shoppingCart[id] = 1;
        // console.log('1. --cart faka chilo, amie first ashlam')
    }
    else{
        // console.log('2. -- age thekei cart e kisu chilo')
        shoppingCart = exist;
        if(shoppingCart[id]){
            // console.log('2(a). --same item product agei chilo akhn ami quantity bariye ditesi')
            const newCount = shoppingCart[id] + 1
            shoppingCart[id] = newCount
        }
        else{
            // console.log('2(b). --cart product chilo agei but ei product chilona')
            shoppingCart[id] = 1
        }
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
}
const removeLocalStorage = () => {
    localStorage.removeItem('shopping_cart')
}

export  {
    addToLocalStorage, 
    getFromLocalStorage,
    removeLocalStorage
}