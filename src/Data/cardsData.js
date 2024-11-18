import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';
import ProductThree from '../images/product/product-03.png';
import ProductFour from '../images/product/product-04.png';


const data = {
    cards: [
      {
        id: 1,
        value: "$3.456K",
        label: "Total views",
      },
      {
        id: 2,
        value: "1.234K",
        label: "New Users",
      },
      {
        id: 3,
        value: "$12.456K",
        label: "Sales",
      },
      {
        id: 4,
        value: "567",
        label: "Reports",
      },
    ],
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
    chart: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
    pieChart: {
      desktop: 70,
      tablet: 20,
      mobile: 50,
      unknown: 80,
    },
    tableData1: [
      {
        id: 1,
        brand: "Google",
        visitors: "3.5K",
        revenue: "$5,768",
        sales: "590",
        conversion: "4.8%",
        image: BrandOne,
      },
      {
        id: 2,
        brand: "Twitter",
        visitors: "2.2K",
        revenue: "$4,635",
        sales: "467",
        conversion: "4.3%",
        image: BrandTwo,
      },
      {
        id: 3,
        brand: "Github",
        visitors: "2.1K",
        revenue: "$4,290",
        sales: "420",
        conversion: "3.7%",
        image: BrandThree,
      },
      {
        id: 4,
        brand: "Vimeo",
        visitors: "1.5K",
        revenue: "$3,580",
        sales: "389",
        conversion: "2.5%",
        image: BrandFour,
      },
      {
        id: 5,
        brand: "Facebook",
        visitors: "1.2K",
        revenue: "$2,740",
        sales: "230",
        conversion: "1.9%",
        image: BrandFive,
      },
    ],
    tableData2 :[
      {
        id: 1,
        image: ProductOne,
        name: 'Apple Watch Series 7',
        category: 'Electronics',
        price: '$269',
        sold: '22',
        profit: '$45',
      },
      {
        id: 2,
        image: ProductTwo,
        name: 'Macbook Pro M1',
        category: 'Electronics',
        price: '$546',
        sold: '34',
        profit: '$125',
      },
      {
        id: 3,
        image: ProductThree,
        name: 'Dell Inspiron 15',
        category: 'Electronics',
        price: '$443',
        sold: '64',
        profit: '$247',
      },
      {
        id: 4,
        image: ProductFour,
        name: 'HP Probook 450',
        category: 'Electronics',
        price: '$499',
        sold: '72',
        profit: '$103',
      },
    ]
  };

  
  export default data;
  