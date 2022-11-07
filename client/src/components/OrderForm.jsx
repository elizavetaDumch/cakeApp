import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { createOrder } from "../http/orderAPI";
import { Context } from "../index";
import { useHistory } from 'react-router-dom';

const OrderForm = () => {
    const { cart } = useContext(Context);
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const order = await createOrder(formData);
        cart.products = [];
        history.push(`/orders/${order.id}`);
    };

    return (
        <div className="my-5">
            <h2 className="text-center">Оформление заказа</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Ваше имя</label>
                    <input
                        {...register("name", { required: true })}
                        className="form-control"
                        placeholder="Ваше имя"
                    />
                    {errors.name && (
                        <p
                            className="invalid-feedback"
                            style={{ display: "block" }}
                        >
                            Ваше имя обязательно для заполнения.
                        </p>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ваш телефон</label>
                    <input
                        {...register("phone", { required: true })}
                        className="form-control"
                        placeholder="Ваш телефон"
                    />
                    {errors.phone && (
                        <p
                            className="invalid-feedback"
                            style={{ display: "block" }}
                        >
                            Ваш телефон обязателен для заполнения.
                        </p>
                    )}
                </div>
                <Button variant="primary" type="submit" className="mb-5">
                    Оформить заказ
                </Button>
            </form>
        </div>
    );
};

export default OrderForm;
