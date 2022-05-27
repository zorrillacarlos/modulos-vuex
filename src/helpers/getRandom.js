//https://medium.com/js-dojo/registering-globally-your-helpers-in-a-vue-app-b7ba3b9596b3

const getRandom = () => {
    return new Promise ((resolve) =>{
        const randomInt = Math.floor(Math.random() * 20 + 2)
        setTimeout (()=>{
            resolve (randomInt)
        }, 5000)
    })
}

export default getRandom