import { ModalProvider } from "react-simple-modal-provider";
import {BasicModal} from "./BasicModal";
import {ConsumePage} from "./ConsumePage";

export const ModalView = () => {
  return (
    <ModalProvider value={[BasicModal]}>
      <ConsumePage />
    </ModalProvider>
  );
};