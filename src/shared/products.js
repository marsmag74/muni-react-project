export const PRODUCTS = [
    {   id: 0,
        image: "/assets/images/strawberry-cake.jpg",
        title: "Strawberry Cake",
        description: "Simply Delicious Strawberry Cake, made with cream cheese frosting and fresh strawberries. Contain milk and eggs. ",
        categories: 
        {
            bakery: true,
            crafts: false
        },
        variations: [
            {
                id: "v-0",
                small: false,
                cost: 10
            },
            {
                id: "v-1",
                medium: true,
                cost: 15
            },
            {
                id: "v-3",
                large: false,
                cost: 25
            },
            {
                id: "v-4",
                halfDozen: false,
                cost: 12
            },
            {
                id: "v-5",
                dozen: false,
                cost: 22
            },
            {    id: "v-6",
            piece: true,
            cost: 10
        }
        ],

        quantity: 3,
    
    },
    {   id: 1,
        image: "/assets/images/pastries.jpg",
        title: "Strawberry cheesecake pastry",
        description: "Simply Delicious Strawberry Cake, made with cream cheese frosting and fresh strawberries. Contain milk and eggs. ",
        categories: 
        {
            bakery: true,
            crafts: false
        },
        variations: [
            {
                id: "v-0",
                small: false,
                cost: 10
            },
            {
                id: "v-1",
                medium: false,
                cost: 15
            },
            {
                id: "v-3",
                large: false,
                cost: 25
            },
            {
                id: "v-4",
                halfDozen: true,
                cost: 18
            },
            {
                id: "v-5",
                dozen: false,
                cost: 32
            },
            {    id: "v-6",
            piece: true,
            cost: 10
        }
        ],

        quantity: 1,
    
    },
    {   id: 2,
        image: "/assets/images/mockaroon.jpg",
        title: "Macaron",
        description: "Mixed flavor macaron. Contain milk, almonds and eggs. ",
        categories: 
        {
            bakery: true,
            crafts: false
        },
        variations: [
            {
                id: "v-0",
                small: false,
                cost: 10
            },
            {
                id: "v-1",
                medium: false,
                cost: 15
            },
            {
                id: "v-3",
                large: false,
                cost: 25
            },
            {
                id: "v-4",
                halfDozen: false,
                cost: 10
            },
            {
                id: "v-5",
                dozen: true,
                cost: 18
            },
            {    id: "v-6",
                piece: true,
                cost: 10
            }
        ],

        quantity: 1,
    
    },
    {   id: 3,
        image: "/assets/images/mango-jam",
        title: "Mango Chutney",
        description: "Organic mango chutney. It may traces of almonds. ",
        categories: 
        {
            bakery: false,
            crafts: true
        },
        variations: [
            
            {
                id: "v-0",
                small: false,
                cost: 10
            },
            {
                id: "v-1",
                medium: false,
                cost: 15
            },
            {
                id: "v-3",
                large: false,
                cost: 25
            },
            {
                id: "v-4",
                halfDozen: false,
                cost: 10
            },
            {
                id: "v-5",
                dozen: false,
                cost: 18
            },
            {
                id: "v-6",
                piece: true,
                cost: 10
            }
        ],

        quantity: 1,
    
    },
    
    
];