import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./usedgoodsWrite.validation";
import UsedgoodsWriteUI from "./usedgoodsWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEFITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./usedgoodsWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useState } from "react";

export default function UsedgoodsWrite() {
  const [lating, setLating] = useState({
    lat: 37.48535119467572,
    lang: 126.90157254106144,
  });
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEFITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
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
            useditemAddress: {
              lat: lating.lang,
              lng: lating.lat,
            },
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
  function onChangeFiles(file: File, index: number) {
    // 이미지 겹치기? 로 사진 삭제 하는법
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  const onChangeContents = (value) => {
    const isBlank = "<p><br></p>";
    setValue("contents", value === isBlank ? "" : value); // 강제로 값만 입력, 이것만 하면 yup에서 검증이 안댐
    trigger("contents");
  };
  const onCilckEdit = async (data: any) => {
    try {
      const results = await updateUseditem({
        variables: {
          updateUseditemInput: { ...data },
          images: files,
          useditemAddress: {
            lat: lating.lang,
            lng: lating.lat,
          },
          useditemId: router.query.market_id,
        },
      });
      Modal.confirm({
        content: "게시물이 등록 완료!",
        onOk: () =>
          router.push(`/market/detail/${results.data?.updateUseditem._id}`),
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <UsedgoodsWriteUI
      onClickRegist={onClickRegist}
      handleSubmit={handleSubmit}
      register={register}
      errors={formState.errors}
      onChangeFiles={onChangeFiles}
      onChangeContents={onChangeContents}
      lating={lating}
      setLating={setLating}
      onCilckEdit={onCilckEdit}
    />
  );
}
