import styles from "./Netflix.module.css"
import styled from "styled-components"

export const SeriseCard = ({ Data }) => {
    // console.log(props);
    const { id, img_url, name, rating, description, cast, genre, watch_url } = Data
    // stle componenet using object
    // const btn_style = {}
    const ButtonOhal = styled.button(
        {
            padding: "1.2rem 2.4rem",
            border: "none",
            fontSize: "1.6rem",
            backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
            color: "var(--btn-color)",
            fontWeight: "bold",
            cursor: "pointer",
        }
    );
    // stle componenet using tempalte litrals
    // const ButtonOhal = styled.button`
    //         padding: 1.2rem 2.4rem
    //         border: none
    //         font-Size: 1.6rem
    //         background-Color: ${(props)=>
    //             props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    //         color: var(--btn-color)
    //         font-Weight: bold
    //         cursor: pointer
    //         `;
    
    const Rating=styled.h3`
    font-size:1.6rem;
    color:red;
    text-transform:captalize;
    `
    const ratingClass = rating >= 8.5 ? styles.supper_hit : styles.average

    return (
        <li className={styles.card}>
            <div>
                <div>
                    <img src={img_url} alt={name} srcSet="" width="40%" height="40%" />
                </div >
                {/* <div className={styles["card-content"]}> */}
                    <div className="flex flex-col gap-6 py-6 px-6">
                    {/* inline css style={{margin:"1.2rem 0"}} */}
                    <h2><b>Name:{name}</b></h2>
                    <Rating>Rating:
                        <span className={`${styles.rating} ${ratingClass}`}>
                            {rating}
                        </span>
                    </Rating>
                    <p className="text-3xl font-bold underline">Summary :{description} </p>
                    <p>Genre:{genre.join(",")}</p>
                    <p>Cast:{cast.join(",")}</p>
                    <a href={watch_url} target="_blank">
                        {/* <button style={btn_style}>Whatch Now</button> */}
                        <ButtonOhal rating={rating}>Whatch Now</ButtonOhal>
                    </a>
                </div>
            </div>
        </li>
    )
}