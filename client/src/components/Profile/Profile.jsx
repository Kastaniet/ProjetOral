import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { getToken } from "../../helpers";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const { user, isLoading, setUser } = useAuthContext();

    const handleProfileUpdate = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // set the auth token to the user's jwt
                    Authorization: `bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();

            setUser(responseData);
            message.success("Data saved successfully!");
        } catch (error) {
            console.error(Error);
            message.error("Error While Updating the Profile!");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <Spin size="large" />;
    }
    return (
        <Card className="profile_page_card">
            <Form
                layout="vertical"
                initialValues={{
                    username: user?.username,
                    email: user?.email,
                    adress: user?.adress,
                    firstname: user?.firstname,
                    lastname: user?.lastname,
                }}
                onFinish={handleProfileUpdate}
            >
                <Row gutter={[16, 16]}>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: false,
                                    message: "Username is required!",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email is required!",
                                    type: "email",
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Nom"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: "Votre nom",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="Votre nom" />
                        </Form.Item>
                    </Col>
                    <Col md={8} lg={8} sm={24} xs={24}>
                        <Form.Item
                            label="Prénom"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: "Votre prénom",
                                    type: "string",
                                },
                            ]}
                        >
                            <Input placeholder="Votre prénom" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Adresse"
                            name="adress"
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                    max: 120,
                                },
                            ]}
                        >
                            <Input.TextArea placeholder="Votre adresse" rows={6} />
                        </Form.Item>
                    </Col>
                </Row>
                <Button
                    className="profile_save_btn"
                    htmlType="submit"
                    type="primary"
                    size="large"
                >
                    {loading ? (
                        <>
                            <Spin size="small" />Enregistrez
                        </>
                    ) : (
                        "Save"
                    )}
                </Button>
            </Form>
        </Card>
    );
};

export default Profile;