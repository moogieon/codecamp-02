import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./usedgoodsWrite.validation";
import UsedgoodsWriteUI from "./usedgoodsWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USEFITEM, UPLOAD_FILE } from "./usedgoodsWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useState } from "react";

export default function UsedgoodsWrite() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEFITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const onClickRegist = async (data: any) => {
    try {
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((data) => data.data.uploadFile.url);
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            images: images,
          },
        },
      });
      console.log(result.data?.createUseditem);

      Modal.confirm({
        content: "게시물이 등록 완료!",
        onOk: () =>
          router.push(`/market/detail/${result.data?.createUseditem._id}`),
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };
  function onChangeFiled(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  return (
    <UsedgoodsWriteUI
      onClickRegist={onClickRegist}
      handleSubmit={handleSubmit}
      register={register}
      errors={formState.errors}
      onChangeFiles={onChangeFiled}
    />
  );
}
