import logo from './logo.png';
import left from './left.png';
import right from './right.png';
import correct from './correct.png';
import wrong from './wrong.png';
import trade from './trade.jpeg';
import graph from './graph.jpg';

export const carouselCards = [
  {
    title1: 'Trade Less',
    title2: 'Trade Smart',
    quote:
      'We could post our trading rules on the front page of the Wall Street Journal, and still people would not be able to make money from them.',
    author: '— Richard Dennis',
  },
  {
    title1: 'Trade Simple',
    title2: 'Trade Smart',
    quote:
      'Complexity is the enemy of execution. A simple strategy well executed beats a complex one mismanaged.',
    author: '— Anonymous',
  },
  {
    title1: 'Trade Smart',
    title2: 'Trade Smart',
    quote:
      'It’s not whether you’re right or wrong that’s important, but how much money you make when you’re right and how much you lose when you’re wrong.',
    author: '— George Soros',
  },
];

export const resourceCards=[
  {
    title:'The IDEAL Trading Mindset' ,
    description:'Discover the psychological framework that seprate consistent winners from the others',
    img: trade,
    link: '/',

  },
  {
    title:'Emotional Intelligence in Trading' ,
    description:'Learn how to recognize and manage emotions that impact your trading',
    img: trade,
    link: '/',
  },
  {
    title:'Engineering Approach to Market Analysis' ,
    description:'Apply systematic engineening principles to develop robust trading strategies.',
    img: trade,
    link: '/',

  },
  {
   title:'Weekly Market Recap- May 2025' ,
    description:'Analysis of recent market movements and preparation for the week ahead',
    img: trade,
    link: '/',
  },
  {
    title:'Risk Management MasterClass' ,
    description:'Essential techniques to protect your capital and maximize returns',
    img: trade,
    link: '/',
  },
  {
    title:'From Engineer to Trader : My journey' ,
    description:'Personal insights on bansuboning from engineenng to full time trading',
    img: trade,
    link: '/',
  },
];
export const recapCards=[
  {
    title: '1-2-3 Chopstick pattern',
    description:'Discover the psychological framework that seprate consistent winners from the others', 
    successrate:'78',
    img: graph,
    link:'/',
  },
  {
    title: 'Double Bottom Bull Flag',
    description:'Learn how to recognize and manage emotions that impact your trading',
    successrate:'82',
    img: graph,
    link:'/',

  },
  {
    title: 'Channel and Triangle pattern',
    description:'Apply systematic engineening principles to develop robust trading strategies.',
    successrate:'75',
    img: graph,
    link:'/',
  },
]
export const whatICards=[
  {
    title:'Stock/Equity Trading ',
    img: trade,
    points: ["Traded during regular market hours",
      "Offers a wide range of sectors to choose from",
      "Heavily influenced by earnings and news",
      "Ideal for both short-term and long-term strategies",]
  },
  {
    title:'Day Trading',
    img: trade,
    points:["Market open 24/7, ideal for flexible trading",
      "Extremely volatile, high reward-risk potential",
      "Driven by sentiment and macro news",
      "Great for scalping and momentum plays"],
  },
];

export const blogsData = [
   {
    // Big blog spanning 2 columns
    id: 1,
    title: "Mastering the Market: A Deep Dive into Trading Strategies",
    description:
      "Explore advanced trading strategies that can help you navigate complex markets with confidence and discipline.",
    img: trade,
    author: {
      name: "Jane Doe",
      position: "Senior Market Analyst",
      photo: trade,
    },
    date: "May 7, 2024",
    readTime: "8 min read",
    link: "/blogs/mastering-the-market",
  },
]; 
export const sideBlogs = [
 {
    // Small blog #1
    id: 0,
    title: "Top 5 Mistakes Novice Traders Make",
    description: "Avoid these common pitfalls that trip up many beginner traders.",
    img: trade,
    date: "April 20, 2024",
    readTime: "5 min read",
    link: "/blogs/novice-trader-mistakes",
  },

  {
    // Small blog #2
    id: 1,
    title: "How to Manage Risk Effectively",
    description: "Risk management is key for long-term trading success. Learn how to do it right.",
    img: trade,
    date: "April 15, 2024",
    readTime: "6 min read",
    link: "/blogs/manage-risk",
  },
];
export const assets = {
  logo,
  left,
  right,
  correct,
  wrong,
  trade,
  graph,
};




