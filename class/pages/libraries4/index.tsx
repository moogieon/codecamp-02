import { Modal } from "@material-ui/core";

import styled from "@emotion/styled";
import { useState } from "react";
const Massages = styled.div`
  font-size: 27px;
`;
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LibrariesPage4() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  return (
    <>
      <Modal
        open={true}
        // onClose={false}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Massages>게시물 등록 완료!</Massages>
      </Modal>
    </>
  );
}
