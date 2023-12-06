import React, { useEffect, useState } from 'react';
import style from "./List.module.css";
import { Link } from 'react-router-dom';

const List = () => {

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
            })
    }

    return (
        <>
            <center>
                <table className={ style.table } >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>url</th>
                            <th>Image</th>
                            <th colSpan={ 2 }>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogDatas.slice(0, 30).reverse().map((data, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ index + 1 }</td>
                                        <td>{ data.title }</td>
                                        <td>{ data.Description }</td>
                                        <td>{ data.type }</td>
                                        <td>{ data.url }</td>
                                        <td><img src={ `http://localhost:1030/public/${data.Filepath}` } alt="n" height={ 50 } width={ 50 } />
                                        </td>
                                        <td>
                                            <Link to={ `/add-blog?${data._id}` }><button className={ style.edit }><i class='bx bxs-message-square-edit'></i></button></Link>
                                        </td>
                                        <td>
                                            <button className={ style.delete } onClick={ () => deleteData(data._id) }><i class='bx bxs-message-square-x' ></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default List
