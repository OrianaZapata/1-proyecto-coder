const products = [
    {
        id: '1',
        name: 'Fish Oil',
        price:' $4000',
        category: 'Vitaminas para adultos',
        img: 'images/fish-oil.png',
        stock: '20',
        description: 'Reducen los triglicéridos, un tipo de grasa en la sangre. Reducen el riesgo de desarrollar latidos cardíacos irregulares (arritmias).'
    },
    {
        id: '2',
        name: 'Vitamina C',
        price:' $3500',
        category: 'Vitaminas para adultos',
        img: '/images/vitamina-c.png',
        stock: '10',
        description: 'Es una vitamina hidrosoluble. Es necesaria para el crecimiento y desarrollo normales.'
    },  
    {
        id: '3',
        name: 'Calcium',
        price:' $1500',
        category: 'Vitaminas para adultos',
        img: '/images/calcium.png',
        stock: '40',
        description: 'Es importante para la buena salud, el crecimiento de huesos fuertes y previniendo la osteoporosis.'
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 3000)
    })
}