// 로그인 성공 페이지

import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { accessTokenState } from "../../src/commons/store/index";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // useEffect(() => {
  //   if (!accessToken) {
  //     alert("로그인하고 사용해라");
  //     router.push("/quiz22-01-login");
  //   }
  // }, [accessToken]);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}

export default withAuth(LoginSuccessPage);
