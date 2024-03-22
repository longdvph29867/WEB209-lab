import React, { useContext, useState } from "react";
import { DemoData } from "../types";
import Joi from "joi";
import axios from "axios";
import { ProductListData } from "../App";

type Props = {
  handleClose: () => void;
};

const AddProduct = ({ handleClose }: Props) => {
  const [productList, setProductList] = useContext(ProductListData);
  const productValidate = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    desc: Joi.string().required(),
  }).options({ abortEarly: true });
  const [form, setForm] = useState<DemoData>({
    name: "",
    image: "",
    price: 0,
    category: "",
    desc: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.preventDefault();
    const { value, error } = productValidate.validate(form);
    console.log(error);
    if (error) {
      alert(error.message);
      return false;
    }

    axios
      .post("http://localhost:8000/products", form, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        alert("Thêm thành công");
        setProductList([...productList, response.data]);
        handleClose();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="w-screen h-screen absolute left-0 top-0 bg-black/50 flex items-center justify-center">
      <form className="w-[450px] bg-white p-4" onSubmit={onSubmit}>
        <div className="flex justify-end">
          <button onClick={handleClose} className="w-5" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>

        <h1 className="text-success font-bold text-center mb-3">Add product</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
          />
          <small className="form-text text-danger text-sm">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            onChange={handleChange}
            type="text"
            name="image"
            className="form-control"
          />
          <small className="form-text text-danger text-sm">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label>Desc</label>
          <input
            onChange={handleChange}
            type="text"
            name="desc"
            className="form-control"
          />
          <small className="form-text text-danger text-sm">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            onChange={handleChange}
            type="text"
            name="price"
            className="form-control"
          />
          <small className="form-text text-danger text-sm">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Example select</label>
          <select
            onChange={handleChange}
            className="form-control"
            name="category"
          >
            <option value="">---Chọn loại---</option>
            <option value="1">Loại 1</option>
            <option value="2">Loại 2</option>
            <option value="3">Loại 3</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success mt-1 inline-block">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
