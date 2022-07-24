const products = [
    {
        id: '1',
        name: 'Vitamina D',
        price:' $4000',
        category: 'Vitaminas para adultos',
        img: 'dffd',
        stock: '20',
        description: 'Vitamina D para adultos'
    },
    {
        id: '2',
        name: 'Vitamina C',
        price:' $3500',
        category: 'Vitaminas para adultos',
        img: 'dffd',
        stock: '10',
        description: 'Vitamina C para adultos'
    },  
    {
        id: '3',
        name: 'Vitamina B',
        price:' $1500',
        category: 'Vitaminas para adultos',
        img: 'dffd',
        stock: '40',
        description: 'Vitamina B para adultos'
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    })
}