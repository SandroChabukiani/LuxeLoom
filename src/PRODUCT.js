import produkti1 from "./images/image 11.png"
import produkti2 from "./images/produkti2.png"
import produkti3 from "./images/produkti3.png"
import produkti4 from "./images/produkti4.png"
import produkti5 from "./images/produkti4.png"

export const PRODUCTS = [
    {
        id: 1,
        productName: "nice dress",
        productDescription: "very nice dress",
        "product_category": {
            id: 2,
            "product_category": "dress",
            "slug": "dress",
            "parent_category_id": {
                "id": 1,
                "product_category": "clothes",
                "slug": "clothes",
                "parent_category_id": null
            }
        },
        "prod_slug": "nice-dress",
        "price": "150.00",
        productImage: produkti1,
    },
    {
        id: 2,
        productName: "beautiful dress",
        productDescription: "very beautifull dress",
        "product_category": {
            "id": 2,
            "product_category": "dress",
            "slug": "dress",
            "parent_category_id": {
                "id": 1,
                "product_category": "clothes",
                "slug": "clothes",
                "parent_category_id": null
            }
        },
        "prod_slug": "beautiful-dress",
        price: "100.00",
        productIimage: produkti2 
    },
    {
        id: 3,
        productName: "beautiful dress",
        productDescription: "very beautifull dress",
        "product_category": {
            "id": 2,
            "product_category": "dress",
            "slug": "dress",
            "parent_category_id": {
                "id": 1,
                "product_category": "clothes",
                "slug": "clothes",
                "parent_category_id": null
            }
        },
        "prod_slug": "beautiful-dress",
        price: "100.00",
        productIimage: produkti3
    },
    {
        id: 4,
        productName: "beautiful dress",
        productDescription: "very beautifull dress",
        "product_category": {
            "id": 2,
            "product_category": "dress",
            "slug": "dress",
            "parent_category_id": {
                "id": 1,
                "product_category": "clothes",
                "slug": "clothes",
                "parent_category_id": null
            }
        },
        "prod_slug": "beautiful-dress",
        price: "100.00",
        productIimage: produkti4
    },
    {
        id: 5,
        productName: "beautiful dress",
        productDescription: "very beautifull dress",
        "product_category": {
            "id": 2,
            "product_category": "dress",
            "slug": "dress",
            "parent_category_id": {
                "id": 1,
                "product_category": "clothes",
                "slug": "clothes",
                "parent_category_id": null
            }
        },
        "prod_slug": "beautiful-dress",
        price: "100.00",
        productIimage: produkti5
    }
]