import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Recenzja smaków Reddsa",
        author: "A.G",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint vero ea consectetur commodi, maiores quasi atque et reiciendis iure ullam tempore sequi quia distinctio perspiciatis quibusdam saepe alias ad."
    },
    {
        id: 2,
        title: "Theatrum Mundi wygrywa... i kończy swoją działalność!",
        author: "H. D-P",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint vero ea consectetur commodi, maiores quasi atque et reiciendis iure ullam tempore sequi quia distinctio perspiciatis quibusdam saepe alias ad."
    },
    {
        id: 3,
        title: "Teatr dramatyczny popierdoliło![zobacz zdjęcia]",
        author: "A.W",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint vero ea consectetur commodi, maiores quasi atque et reiciendis iure ullam tempore sequi quia distinctio perspiciatis quibusdam saepe alias ad."
    },
]

const HomePage = () => {
    const artList = articles.map(article => (<Article key={article.id} {...article}/>))

    return ( <>
    <div className="home">
        {artList}
    </div>
    </> );
}
 
export default HomePage;