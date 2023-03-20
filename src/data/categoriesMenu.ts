//create a inteface with image imported and title string
export interface ICategoryMenu {
  image: any;
  title: string;
}

//create a array of ICategoryMenu
export const categoriesMenu: ICategoryMenu[] = [
  {
    image: require("@assets/images/shopping-bag.png"),
    title: "Pick-up",
    },
    {
        image: require("@assets/images/bread.png"),
        title: "Bakery Items",
    },
    {
        image: require("@assets/images/fast-food.png"),
        title: "Fast Food",
    },
    {
        image: require("@assets/images/deals.png"),
        title: "Deals",
    },
    {
        image: require("@assets/images/coffee.png"),
        title: "Coffee & Tea",
    },
    {
        image: require("@assets/images/desserts.png"),
        title: "Desserts",
    }
];
