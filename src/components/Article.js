import React from 'react';

const Article = (props) => {
    const { title, author, text } = props;
    const styles = {
        marginTop: 40,
    }
    return ( 
        <article style={styles}>
            <h3 style={{marginBottom: 3, textTransform: "uppercase"}}>{title}</h3>
            <h4 style={{display: "block", marginBottom: 10, fontSize: 14}}>{author}</h4>
            <p>{text}</p>
        </article>
     );
}
 
export default Article;