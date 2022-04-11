// 등록하기
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";

import WritePage from "../../../src/components/units/board/21-recoil/write";

export default function NewPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <WritePage />;
}
