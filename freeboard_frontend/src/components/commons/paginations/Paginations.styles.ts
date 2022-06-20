import styled from "@emotion/styled/";
interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  /* color: white; */
  cursor: pointer;
  color: ${(props: IPageProps) => (props.isActive ? " #ffc414;" : "white")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
