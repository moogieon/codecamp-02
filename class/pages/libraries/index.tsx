import { TwitterOutlined } from "@ant-design/icons";

import styled from "@emotion/styled";

const Twitter = styled(TwitterOutlined)`
  color: blue;
  font-size: 50px;
`;

export default function LibrariesPage() {
  function onClickIcon(event: any) {
    console.log(event.target);
    console.log(event.target.id);
  }

  return (
    <>
      <div>sss</div>
      <Twitter id="1234" onClick={onClickIcon} />
    </>
  );
}
