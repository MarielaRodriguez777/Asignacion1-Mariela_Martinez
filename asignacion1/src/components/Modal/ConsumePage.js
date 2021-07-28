import { useModal } from "react-simple-modal-provider";

export const ConsumePage = () => {
  const { open: openModal } = useModal("BasicModal");

  return <button onClick={openModal}>Open</button>;
};