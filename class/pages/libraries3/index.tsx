import { Modal } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button`
  width: 500px;
  height: 100px;
  font-size: 30px;
  background-color: lightgrey
  border-radius: 5%;
  cursor: pointer;
  margin: 500px;
  position: relative;
  :hover {
    background-color: #be540c;
    color: orange;
  }
`;

export default function Libraries3Page() {
  const [isOpen, setIsOpen] = useState(false);

  function onClickSubmit() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        onCancel={onClose}
        onOk={onClickSubmit}
        title="게시물 등록"
        visible={isOpen}
        // onOk={handleOk} onCancel={handleCancel}
      >
        <div>게시물이 등록되었습니다.</div>
      </Modal>
      <Button>게시물 등록</Button>
    </>
  );
}
