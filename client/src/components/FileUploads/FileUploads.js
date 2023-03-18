import React from "react"
import { useFormik } from "formik"
import "./fileUpload.scss"
import { useAuthContext } from "../../context/AuthContext"
import { Navigate } from "react-router-dom"

const FileUpload = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted


    const { user } = useAuthContext()

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            price: "",
        },

        onSubmit: async (values) => {

            console.log("values", values)

            const formData = new FormData()
            const SubCat = values.sub_categories;

            //single-file
            formData.append("files.single", values.singleFile)


            //for upload page
            const uploadData = new FormData()
            uploadData.append("files", values.singleFile)

            //upload file to uploads

            const uploadFile = await fetch("http://localhost:8080/api/upload", {
                method: "POST",
                body: uploadData,
                headers: {},
            })
            const uploadRes = await uploadFile.json()

            console.log("uploadRes", uploadRes)

            const data = {
                title: values.title,
                desc: values.desc,
                price: values.price,
                CreatedBy: user.username,
                img: uploadRes[0],
                type: `Normal`,
                categories: { connect: [6] },
                sub_categories: { connect: SubCat }
            }

            console.log("data", data)

            formData.append("data", JSON.stringify(data))

            // simple create new collection with JSON

            const createProduct = await fetch("http://localhost:8080/api/products", {
                method: "POST",
                body: formData,
                headers: {},
            })
            const createRes = await createProduct.json()

            console.log("createProductRes", createRes)

            Navigate("/products/6", {replace: true})
            window.location.reload(true);
        },
    })

    const onSingleFileChange = (e) => {
        const file = e.target.files
        console.log("onSingleFileChange", file)
        console.log("onSingleFileChange1", file[0])

        formik.setFieldValue("singleFile", file[0])
  
    }

    return (
        <form
            onSubmit={formik.handleSubmit}
            className={{
                display: "flex",
            }}
        >
            <div>
                <label htmlFor="title" className="labelStyle">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    className="inputStyle"
                />
            </div>
            <div>
                <label htmlFor="desc" className="labelStyle">
                    Description
                </label>
                <input
                    id="desc"
                    name="desc"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    className="inputStyle"
                />
            </div>
            <div>
                <label htmlFor="Price" className="labelStyle">
                    Prix
                </label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    className="inputStyle"
                />
            </div>
            <div>
                <label htmlFor="file" className="labelStyle">
                    Image
                </label>
                <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={onSingleFileChange}
                    value={formik.values.file}
                    className="inputStyle"
                />
            </div>
            <div className="SubCategory">
                <label>
                    <input
                        name="sub_categories"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value= {parseInt("1")}
                    />
                    Playstation
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="sub_categories"
                        onChange={formik.handleChange}
                        value={parseInt("2")}
                    />
                    Nintendo
                </label>
            </div>
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        name="sub_categories"
                        onChange={formik.handleChange}
                        value={parseInt("3")}
                    />
                    Xbox
                </label>
            </div>
            <button type="submit" className="btnStyle">
                Soumettre
            </button>
        </form>
    )
}

export default FileUpload