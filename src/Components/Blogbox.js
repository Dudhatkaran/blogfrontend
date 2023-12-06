/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';

const Blogbox = ({ data }) => {

    const [blogDatas, setBlogDatas] = useState([]);
    const [post] = useState({});
    const [likeColor, setLikeColor] = useState('');
    const [likeIcon, setLikeIcon] = useState('bx bxs-like');
    const [clickCount, setClickCount] = useState(0);

    const deleteData = async (id) => {
        console.log('id::: ', id);
        fetch(`http://localhost:1030/api/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('data::: ', data);
                const delete_data = blogDatas.filter((ele, index) => ele._id !== id);
                setBlogDatas(delete_data)
            }).catch((err) => {
                console.log('err::: ', err)
            });
    }

    const location = useLocation();
    const id = location.search.split('?')[1];

    useEffect(() => {
        if (id) {
            const editdata = async () => {
                fetch(`http://localhost:1030/api/getEditdata/${id}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ my_id: id }),
                    })
                    .then(response => response.json())
                    .then((data) => {
                        console.log('data::: ', data);
                        setData({
                            ...data,
                            title: data.datas.title,
                            describe: data.datas.Description,
                            type: data.datas.type,
                            Filepath: data.datas.originalname
                        })
                    }
                    ).catch((err) => {
                        console.log('err::: ', err);
                    })
            }
            editdata();
        }
    }, [])

    useEffect(() => {
        const storedColor = sessionStorage.getItem(`likeColor_${data._id}`);
        const storedIcon = sessionStorage.getItem(`likeIcon_${data._id}`);
        const storedClickCount = sessionStorage.getItem(`clickCount_${data._id}`);

        if (storedColor && storedIcon && storedClickCount) {
            setLikeColor(storedColor);
            setLikeIcon(storedIcon);
            setClickCount(Number(storedClickCount));
        }
    }, [data._id]);

    const handleLike = () => {
        const nextColor = clickCount % 2 === 0 ? 'red' : '';
        const nextIcon = clickCount % 2 === 0 ? 'bx bxs-like' : 'bx bxs-like';

        setLikeColor(nextColor);
        sessionStorage.setItem(`likeColor_${data._id}`, nextColor);
        setLikeIcon(nextIcon);
        sessionStorage.setItem(`likeIcon_${data._id}`, nextIcon);
        setClickCount(clickCount + 1);
        sessionStorage.setItem(`clickCount_${data._id}`, clickCount + 1);
    };

    return (
        <>
            <div className="card" style={ { width: "25rem", border: "1px solid black" } }>
                <img style={ { height: "100%", width: "100%", objectFit: "contain", borderRadius: "5px" } }
                    src={ `http://localhost:1030/public/${data.Filepath}` }
                    className="d-block mx-lg-auto img-fluid"
                    lt="Bootstrap Themes"
                    loading="lazy" />
                <div className="card-body">
                    <u><center><b><p className="card-text">{ data.type }</p></b></center></u><br />
                    <u><h4 style={ { marginLeft: "10px" } }>Title:</h4></u>
                    <textarea style={ { marginLeft: "10px", paddingTop: "10px", paddingLeft: "10px" } } name="" id="" cols="39" rows="2" disabled>{ data.title }</textarea>
                    <u><h4 style={ { marginLeft: "10px" } }>About:</h4></u>
                    <textarea style={ { marginLeft: "10px", paddingTop: "10px", paddingLeft: "10px" } } name="" id="" cols="39" rows="4" disabled>{ data.Description }</textarea>
                    <u><h4 style={ { marginLeft: "10px" } }>URL:</h4></u>
                    <textarea style={ { marginLeft: "10px", paddingTop: "10px", paddingLeft: "10px" } } name="" id="" cols="39" rows="2" disabled>{ data.url }</textarea>
                    <h1>{ post.title }</h1>
                    <p>{ post.describe }</p>
                    <p>{ post.type }</p>
                    <p>{ post.Filepath }</p>
                    <FacebookShareButton url={ window.location.href } quote={ post.Blogbox }>
                        <i style={ { marginLeft: "25px", fontSize: "40px" } } class='bx bxl-facebook-circle'></i>
                    </FacebookShareButton>
                    <TwitterShareButton url={ window.location.href } title={ post.Blogbox }>
                        <i style={ { marginLeft: "45px", fontSize: "40px" } } class='bx bxl-twitter'></i>
                    </TwitterShareButton>
                    <LinkedinShareButton url={ window.location.href } title={ post.Blogbox }>
                        <i style={ { marginLeft: "45px", fontSize: "40px" } } class='bx bxl-linkedin-square'></i>
                    </LinkedinShareButton>
                    <WhatsappShareButton url={ window.location.href } title={ post.Blogbox }>
                        <i style={ { marginLeft: "45px", fontSize: "40px" } } class='bx bxl-whatsapp-square'></i>
                    </WhatsappShareButton><br /><br />
                    <button
                        onClick={ handleLike }
                        className="btn btn-primary"
                        style={ { backgroundColor: likeColor, marginLeft: "30px" } } >
                        <i className={ likeIcon }></i>
                    </button>
                    <input type="text" placeholder='Add comments!!' style={ { borderTop: "none", borderRight: "none", borderLeft: "none", width: "220px", marginLeft: "20px" } } /> <br /><hr />
                    <Link to={ `/add-blog?${data._id}` }><a className="btn btn-primary" style={ { marginLeft: "30px", width: "70px" } }>Edit</a></Link>
                    <a className="btn btn-primary" onClick={ () => deleteData(data._id) } style={ { marginLeft: "140px", width: "80px" } }>Delete</a>
                </div>
            </div>
        </>
    )
}

export default Blogbox
