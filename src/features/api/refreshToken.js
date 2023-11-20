import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAccessToken, setRefreshToken, logUserOut } from "../auth/authSlice";
import { useUpdateTokensMutation } from "../auth/authApi";

export default function RefreshToken() {
  const dispatch = useDispatch();

  const isUser = useSelector((state) => state.auth?.user);
  const accessToken = useSelector((state) => state.auth?.access);
  const refreshToken = useSelector((state) => state.auth?.refresh);

  const [getToken, { data, isSuccess, isError }] = useUpdateTokensMutation();

  useEffect(() => {
    let timeOut = null;
    const runGetToken = () => {
      getToken({ access_token: accessToken, refresh_token: refreshToken });
    };
    if (isUser) {
      timeOut = setInterval(runGetToken, 60000);
    }
    return () => {
      clearInterval(timeOut);
    };
  }, [accessToken, getToken, isUser, refreshToken]);

  useEffect(() => {
    let timeOut = null;

    if (isError) {
      timeOut = setTimeout(logUserOut, 2000);
    }
    return () => {
      clearInterval(timeOut);
    };
  }, [accessToken, dispatch, getToken, isError, isUser, refreshToken]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAccessToken(data?.access_token));
      dispatch(setRefreshToken(data?.refresh_token));
    }
  }, [data, dispatch, isSuccess]);
}
