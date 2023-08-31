import { FC } from "react";
import { StyledLandingModal } from "./LandingModal.styled";
import Modal from "../Modal/Modal";

type Props = {
  dismiss: () => void;
};

const LandingModal: FC<Props> = ({ dismiss }) => {
  return (
    <Modal dismiss={dismiss}>
      <StyledLandingModal>
        <h3>
          Monitoring Property Changes.
          <br />
          Empowering Through Transparency.
        </h3>

        <div className="content">
          <p>
            After significant events, land transactions can leave communities in the dark. We provide a clear view of these property shifts. 
            By presenting real data post-damaging occurrences, we ensure everyone has access to the information they need.
          </p>

          <p>
            Our goal? Simple. Offer transparency so individuals can make informed decisions and draw their own conclusions.
          </p>

          <p>
            Stay informed. Make informed choices. Every property, every change.
          </p>

          <p><b>Guarding Grounds, One Plot at a Time.</b></p>
        </div>
      </StyledLandingModal>
    </Modal>
  );
};

export default LandingModal;
