/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./Add-blog.css"

const Addblog = () => {

    const location = useLocation();
    const id = location.search.split('?')[1];

    const [data, setData] = useState({
        title: "",
        describe: "",
        type: "",
        Filepath: "",
        url: ""
    })

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
                            Filepath: data.datas.originalname,
                            url: data.datas.url
                        })
                    }
                    ).catch((err) => {
                        console.log('err::: ', err);
                    })
            }
            editdata();
        }
    }, [])

    const [file, setFile] = useState();

    const handleChangeValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const saveData = async () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('data', JSON.stringify(data));
        await fetch(`http://localhost:1030/api/createBlog`, {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: formData
        }).then((res) => res.json())
            .then((data) => {
                console.log('data::: ', data.response);
            })
            .catch(err => console.log('err::: ', err));
        setData({
            ...data,
            title: "",
            describe: "",
            type: "",
            Filepath: "",
            url: ""
        });
        setFile(null);
    }

    const updatadata = async () => {
        data.Filepath = file
        console.log('data::: ', data);

        await fetch(`http://localhost:1030/api/getupdatedata/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((data) => {
                console.log('Data updated:', data);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
        setData({
            ...data,
            title: "",
            describe: "",
            type: "",
            Filepath: "",
            url: ""
        })
    }

    return (
        <>
            <div style={ { backgroundColor: "rgb(209,245,255)" } }>
                <div className="container col-xxl-8 px-4 py-5">
                    <div style={ { width: "500px", margin: "auto" } }>
                        <center><h4 className="mb-3">Add Blog</h4></center><br />
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="blog-title" className="form-label">Food Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='title'
                                    onChange={ handleChangeValue }
                                    value={ data.title }
                                    placeholder='TItle'
                                    required="" />
                                <div className="invalid-feedback">
                                    Your Title is required.
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="blog-des" className="form-label">Food Description</label>
                                <div className="input-group has-validation">
                                    <textarea
                                        name='describe'
                                        onChange={ handleChangeValue }
                                        value={ data.describe }
                                        type="text" className="form-control" placeholder="Blog Description" required=""></textarea>
                                    <div className="invalid-feedback">
                                        Your blog-description is required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <label htmlFor="blog-url" className="form-label">Blog URL</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    name='url'
                                    onChange={ handleChangeValue }
                                    value={ data.url }
                                    required=""
                                    placeholder="https://www.example.com"
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid URL.
                                </div>
                            </div>
                            <div className="col-5">
                                <label htmlFor="blog-type" className="form-label">Food Type</label><br />
                                <select name='type'
                                    onChange={ handleChangeValue }
                                    value={ data.type } className="form-select" required>
                                    <option value="">Choose...</option>
                                    <option>Burger</option>
                                    <option>Egg Role</option>
                                    <option>French Fries</option>
                                    <option>Sandwich</option>
                                    <option>Pizza</option>
                                    <option>Subway</option>
                                    <option>Sizzler</option>
                                    <option>Spaghetti</option>
                                    <option>Omelet</option>
                                    <option>Chicken</option>
                                    <option>Paneer Shawarma</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select option.
                                </div>
                            </div>
                            <div className="col-5">
                                <label htmlFor="formFile" className="form-label">Image</label>
                                <input onChange={ (e) => setFile(e.target.files[0]) } className="form-control" type="file" accept='image/jpg, image/png, image/jpeg, image/webp' id="formFile" />
                                <div className="invalid-feedback">
                                    Please Add a Image.
                                </div>
                            </div>
                        </div>
                        <hr />
                        <button onClick={ id ? updatadata : saveData } className="w-100 btn btn-primary btn-lg" type="submit">
                            { id ? "Update blog" : "Add blog" }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addblog