import { Modal } from "antd";

const CustomModal = ({ children }, props) => {

  const { isModalOpen, handleCancel } = props

  return (
    <Modal 
      open={isModalOpen}
      closable={false}
      onCancel={handleCancel}
      footer={null}
      cancelButtonProps={{ style: { display: 'none' } }}
      width={280}
      >
        {children}
      </Modal>
  )
}

export default CustomModal;