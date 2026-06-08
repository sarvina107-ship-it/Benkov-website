import Cinema1 from '../assets/directions/image.webp'
import Cinema2 from '../assets/directions/image1.webp'
import Cinema3 from '../assets/directions/image2.webp'
import Cinema4 from '../assets/directions/image3.webp'
import Lacquer1 from '../assets/directions/image4.webp'
import Lacquer2 from '../assets/directions/image5.webp'
import Lacquer3 from '../assets/directions/image6.webp'
import Lacquer4 from '../assets/directions/image7.webp'
import Graphic1 from '../assets/directions/image8.webp'
import Graphic2 from '../assets/directions/image9.webp'
import Graphic3 from '../assets/directions/image10.webp'
import Graphic4 from '../assets/directions/image11.webp'
import Easel1 from '../assets/directions/image12.webp'
import Easel2 from '../assets/directions/image13.webp'
import Easel3 from '../assets/directions/image14.webp'
import Easel4 from '../assets/directions/image15.webp'
import Monumental1 from '../assets/directions/image16.webp'
import Monumental2 from '../assets/directions/image17.webp'
import Monumental3 from '../assets/directions/image18.webp'
import Monumental4 from '../assets/directions/image19.webp'
import Set1 from '../assets/directions/image20.webp'
import Set2 from '../assets/directions/image21.webp'
import Set3 from '../assets/directions/image22.webp'
import Set4 from '../assets/directions/image23.webp'
import Props1 from '../assets/directions/image24.webp'
import Props2 from '../assets/directions/image25.webp'
import Props3 from '../assets/directions/image26.webp'
import Props4 from '../assets/directions/image27.webp'
import Wood1 from '../assets/directions/image28.webp'
import Wood2 from '../assets/directions/image29.webp'
import Wood3 from '../assets/directions/image30.webp'
import Wood4 from '../assets/directions/image31.webp'
import Ganch1 from '../assets/directions/image32.webp'
import Ganch2 from '../assets/directions/image33.webp'
import Ganch3 from '../assets/directions/image34.webp'
import Ganch4 from '../assets/directions/image35.webp'
import Costume1 from '../assets/directions/image36.webp'
import Costume2 from '../assets/directions/image37.webp'
import Costume3 from '../assets/directions/image38.webp'
import Costume4 from '../assets/directions/image39.webp'
import Sculpture1 from '../assets/directions/image40.webp'
import Sculpture2 from '../assets/directions/image41.webp'
import Sculpture3 from '../assets/directions/image42.webp'
import Sculpture4 from '../assets/directions/image43.webp'
import Interior1 from '../assets/directions/image44.webp'
import Interior2 from '../assets/directions/image45.webp'
import Interior3 from '../assets/directions/image46.webp'
import Interior4 from '../assets/directions/image47.webp'
import Computer1 from '../assets/directions/image48.webp'
import Ceramics1 from '../assets/directions/image52.webp'
import Ceramics2 from '../assets/directions/image53.webp'
import Ceramics3 from '../assets/directions/image54.webp'
import Ceramics4 from '../assets/directions/image55.webp'

export const directionsCategories = [
    {
        category: "cinema",
        items: ["cinema-artist"]
    },
    {
        category: "graphics",
        items: ["lacquer-miniature", "graphic-artist"]
    },
    {
        category: "painting",
        items: ["easel-painting", "monumental-painting"]
    },
    {
        category: "theater",
        items: ["theatrical-set-designer", "theatrical-props"]
    },
    {
        category: "carving",
        items: ["wood-carving", "ganch-carving"]
    },
    {
        category: "designer",
        items: ["costume-designer", "interior-designer", "computer-graphics-designer"]
    },
    {
        category: "sculpture",
        items: ["artistic-ceramics", "sculpture", "artist-restorer"]
    }
];

export const directionsData = {
    "cinema-artist": {
        image: Cinema4,
        images: [Cinema1, Cinema2, Cinema3, Cinema4]
    },
    "lacquer-miniature": {
        image: Lacquer1,
        images: [Lacquer1, Lacquer2, Lacquer3, Lacquer4]
    },
    "graphic-artist": {
        image: Graphic1,
        images: [Graphic1, Graphic2, Graphic3, Graphic4]
    },
    "easel-painting": {
        image: Easel4,
        images: [Easel1, Easel2, Easel3, Easel4]
    },
    "monumental-painting": {
        image: Monumental3,
        images: [Monumental1, Monumental3, Monumental4, Monumental2]
    },
    "theatrical-set-designer": {
        image: Set2,
        images: [Set1, Set2, Set3, Set4]
    },
    "theatrical-props": {
        image: Props1,
        images: [Props1, Props3, Props4, Props2]
    },
    "wood-carving": {
        image: Wood1,
        images: [Wood2, Wood1, Wood3, Wood4]
    },
    "ganch-carving": {
        image: Ganch1,
        images: [ Ganch4,Ganch1, Ganch3, Ganch2]
    },
    "costume-designer": {
        image: Costume3,
        images: [Costume1, Costume2, Costume3, Costume4]
    },
    "interior-designer": {
        image: Interior2,
        images: [Interior1, Interior2, Interior3, Interior4]
    },
    "computer-graphics-designer": {
        image: Computer1,
        images: [Computer1, "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    },
    "artistic-ceramics": {
        image: Ceramics2,
        images: [Ceramics1, Ceramics2, Ceramics3, Ceramics4]
    },
    "sculpture": {
        image: Sculpture1,
        images: [Sculpture1, Sculpture2, Sculpture3, Sculpture4]
    },
    "artist-restorer": {
        image: "/images/directions/restoration.jpg",
        images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]
    }
};