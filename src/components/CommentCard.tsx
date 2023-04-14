import React, { useEffect, useState } from "react";

import { CardStyled, HateHeader, HatePara, InputField, SendBtn } from "../styled";
import postUp from '../images/postUp.png';
import profilePicSmall from '../images/profilepicsmall.png';
import { Row, Col, Button, Input, Modal, Form, Card, message, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import { SendOutlined } from "@ant-design/icons";


export interface ICommentCard {
  
}

const CommentCard: React.FC<ICommentCard> = () => {

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [isHate, setIsHate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isprocessed, setIsprocessed] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onFinish = (values: any) => {
    setIsLoading(true);
    console.log(values);
    setComment(values.comment);
    // this random number is used for devlopment only, need to be removed once the api starts returning the actual values.
    var value = Math.round(Math.random());
    console.log(value);
    if (value == 1){
      setIsHate(true);
      setIsModalOpen(true);
      setIsprocessed(true);
      setIsLoading(true);
    }else{
      setIsprocessed(true);
      setIsLoading(true);

    }

  };


  return (
    <CardStyled>
        <img style={{height: "574px", paddingTop: "40px"}} src={postUp} alt="post" />
        <div style={{alignItems: "center", boxShadow: "0px -4px 5px rgb(0 0 0 / 14%)",borderRadius: "0px 0px 20px 20px"}}>
            <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
        <Row style={{alignItems: "flex-start"}}>
            <Col span={2}></Col>
            <Col span={3}>
            <img style={{height: "40px", margin:" 5px"}} src={profilePicSmall} alt="profile pic" />
            </Col>
            <Col span={13} style={{paddingTop: "10px"}}>
            <Form.Item name="comment" rules={[
                      {
                        required: true,
                        message: "Please input a comment!",
                      },
                    ]}>
              {/* <InputField placeholder="Enter your Comment" /> */}
              <InputField rows={1} placeholder="Enter your Comment" autoSize showCount/>
            </Form.Item>
            </Col>
            <Col span={4} style={{paddingTop: "10px"}}>
              <Form.Item>
                { isprocessed ? <SendBtn type="primary" htmlType="submit" danger={isHate} icon={!isHate && <SendOutlined />} style={{background: `${!isHate && "#2BCA3B"}`}} >{isHate ? "Change": "Send" }</SendBtn>:
                <SendBtn type="primary" htmlType="submit" loading={isLoading}>{isLoading ? "Processing": "Send" }</SendBtn>
                }
              </Form.Item>
            </Col>
            <Col span={2}></Col>
        </Row>
        </Form>
        <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} mask>
          <HateHeader>Hate speech detected !</HateHeader>
          <HatePara>Please change your comment, we have detected hate speech on your recent comment .</HatePara>
          <div style={{border: "1px solid #9834D6", borderRadius: "19px", padding: "2px 20px"}}>
          <Paragraph copyable><b>{comment}</b></Paragraph>
          </div>
        <p>Above comment contains hate speech of the religious intolerance category. we recommend changing the comment as this violates our user policy. and posting such hate full content is prohibited in our platform. <a>Read more</a></p>
        <hr/>
        <HatePara style={{color: "#810064"}}><b>Hate Speech Status</b></HatePara>
        <p>Hate Score : 40% </p>
        <p>Hate Category : Religious Intolerence</p>
        </Modal>
        </div>
    </CardStyled>
  );
};

export default CommentCard;