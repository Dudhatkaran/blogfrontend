import React, { useEffect, useState } from 'react'
import Blogbox from '../Blogbox';
import "./AllBlog.css";

const AllBlog = () => {

    const [blogDatas, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:1030/api/getAllBlogs`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
                .then((data) => {
                    setBlogDatas(data)
                })
                .catch((error) => console.log('error::: ', error))
        }
        fetchApi();
    }, []);

    return (
        <>
            <div style={ { backgroundColor: "rgb(209,245,255)", width: "100%" } }>
                <center style={ { fontSize: "30px", padding: "20px", fontWeight: "bold" } }>ALL BLOGS</center>
                <div style={ {
                    display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", marginLeft: "100px"
                } }>
                    {
                        blogDatas.slice(0, 30).reverse().map((data, index) => (
                            <div style={ { margin: "10px 0" } } key={ index }>
                                <Blogbox data={ data } />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllBlog
